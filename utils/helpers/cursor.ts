import $ from "jquery";
import gsap from "gsap";

export type CursorOptions = {
  container: string;
  speed: number;
  ease: string;
  visibleTimeout: number;
};

type Point = {
  x: number;
  y: number;
};

class Cursor {
  el: JQuery<HTMLElement>;
  body: JQuery<HTMLElement>;
  text: JQuery<HTMLElement>;
  options: CursorOptions;
  stick?: Point | Boolean | any;
  visible?: Boolean;
  visibleInt?: NodeJS.Timeout;
  pos?: Point | any = { x: 0, y: 0 };

  constructor(options?: CursorOptions) {
    this.options = $.extend(
      true,
      {
        container: "html",
        speed: 0.7,
        ease: "expo.out",
        visibleTimeout: 300,
      },
      options
    );
    this.body = $(this.options.container);
    this.el = $('<div class="cb-cursor"></div>');
    this.text = $('<div class="cb-cursor-text"></div>');
    this.init();
    $("[data-magnetic]").each(function () {
      new Magnetic(this);
    });
  }

  init() {
    this.el.append(this.text);
    this.body.children().append(this.el);
    this.bind();
    this.move(-window.innerWidth, -window.innerHeight, 0);
  }

  bind() {
    const self = this;

    this.body
      .on("mouseleave", () => {
        self.hide();
      })
      .on("mouseenter", () => {
        self.show();
      })
      .on("mousemove", (e) => {
        this.pos = {
          x: this.stick ? this.stick.x - (this.stick.x - e.clientX) * 0.15 : e.clientX,
          y: this.stick ? this.stick.y - (this.stick.y - e.clientY) * 0.15 : e.clientY,
        };
        this.update();
      })
      .on("mousedown", () => {
        self.setState("-active");
      })
      .on("mouseup", () => {
        self.removeState("-active");
      })
      .on("mouseenter", "a,input,textarea,button", () => {
        self.setState("-pointer");
      })
      .on("mouseleave", "a,input,textarea,button", () => {
        self.removeState("-pointer");
      })
      .on("mouseenter", "iframe", () => {
        self.hide();
      })
      .on("mouseleave", "iframe", () => {
        self.show();
      })
      .on("mouseenter", "[data-cursor]", function () {
        self.setState(this.dataset.cursor);
      })
      .on("mouseleave", "[data-cursor]", function () {
        self.removeState(this.dataset.cursor);
      })
      .on("mouseenter", "[data-cursor-text]", function () {
        self.setText(this.dataset.cursorText);
      })
      .on("mouseleave", "[data-cursor-text]", function () {
        self.removeText();
      })
      .on("mouseenter", "[data-cursor-stick]", function () {
        self.setStick(this.dataset.cursorStick);
      })
      .on("mouseleave", "[data-cursor-stick]", function () {
        self.removeStick();
      });
  }

  setState(state: string) {
    this.el.addClass(state);
  }

  removeState(state: string) {
    this.el.removeClass(state);
  }

  toggleState(state: string) {
    this.el.toggleClass(state);
  }

  setText(text: string) {
    this.text.html(text);
    this.el.addClass("-text");
  }

  removeText() {
    this.el.removeClass("-text");
  }

  setStick(el: string) {
    const target: any | JQuery<HTMLElement> = $(el);
    const bound = target?.get(0).getBoundingClientRect();
    this.stick = {
      y: bound.top + target.height() / 2,
      x: bound.left + target.width() / 2,
    };
    this.move(this.stick.x, this.stick.y, 5);
  }

  removeStick() {
    this.stick = false;
  }

  update() {
    this.move();
    this.show();
  }

  move(x?: number, y?: number, duration?: number) {
    gsap.to(this.el, {
      x: x || this.pos.x,
      y: y || this.pos.y,
      force3D: true,
      overwrite: true,
      ease: this.options.ease,
      duration: this.visible ? duration || this.options.speed : 0,
    });
  }

  show() {
    if (this.visible) return;
    clearInterval(this.visibleInt);
    this.el.addClass("-visible");
    this.visibleInt = setTimeout(() => (this.visible = true));
  }

  hide() {
    clearInterval(this.visibleInt);
    this.el.removeClass("-visible");
    this.visibleInt = setTimeout(() => (this.visible = false), this.options.visibleTimeout);
  }
}

class Magnetic {
  el: JQuery<HTMLElement> | any;
  x: number;
  y: number;
  width: number;
  height: number;
  options: { y: number; x: number; s: number; rs: number };

  constructor(el: any, options = {}) {
    this.el = $(el);
    this.options = $.extend(
      true,
      {
        y: 0.2,
        x: 0.2,
        s: 0.2,
        rs: 0.7,
      },
      this.el.data("magnetic") || options
    );

    this.y = 0;
    this.x = 0;
    this.width = 0;
    this.height = 0;

    if (this.el.data("magnetic-init")) return;
    this.el.data("magnetic-init", true);

    this.bind();
  }

  bind() {
    this.el.on("mouseenter", () => {
      this.y = this.el.offset().top - window.pageYOffset;
      this.x = this.el.offset().left - window.pageXOffset;
      this.width = this.el.outerWidth();
      this.height = this.el.outerHeight();
    });

    this.el.on("mousemove", (e: MouseEvent) => {
      const y = (e.clientY - this.y - this.height / 2) * this.options.y;
      const x = (e.clientX - this.x - this.width / 2) * this.options.x;

      this.move(x, y, this.options.s);
    });

    this.el.on("mouseleave", () => {
      this.move(0, 0, this.options.rs);
    });
  }

  move(x: number, y: number, speed: number) {
    gsap.to(this.el, {
      y: y,
      x: x,
      force3D: true,
      overwrite: true,
      duration: speed,
    });
  }
}

export { Magnetic };
export default Cursor;
