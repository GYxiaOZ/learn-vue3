import { createRenderer } from "@vue/runtime-core";
import { Graphics, Text, Container, Sprite, Texture } from "pixi.js";
// 创建渲染器
// 实现渲染接口
const renderer = createRenderer({
  createElement(type) {
    // 基于type
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      case "circle":
        element = new Graphics();
        element.beginFill(Math.floor(Math.random() * 16777215), 1);
        element.drawCircle(0, 0, 100);
        element.endFill();
        break;
      case "text":
        element = new Text();
        element.style = {
          fontSize: 36,
          fill: "white",
        };
        element.zIndex = 100;
        break;
    }

    return element;
  },
  insert(el, parent) {
    parent.addChild(el);
  },
  patchProp(el, key, prevValue, nextValue) {
    // 设置属性
    // pixi
    // el.x = nextValue
    // console.log(el, key, prevValue, nextValue);
    switch (key) {
      case "texture":
        // 设置图片
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        // pixi 给元素注册点击事件
        el.on("pointertap", nextValue);
        break;
      default:
        el[key] = nextValue;
    }
  },
  setElementText(node, text) {
    const canvasText = new Text(text);
    node.addChild(canvasText);
  },
  createText(text) {
    return new Text(text);
  },
  // 新加
  // 处理注释
  createComment() {},
  // 获取父节点
  parentNode() {},
  // 获取兄弟节点
  nextSibling() {},
  // 删除节点时调用
  remove(el) {
    const parent = el.parent;
    if (parent) {
      parent.removeChild(el);
    }
  },
});

export function createApp(rootComponent) {
  // 调用 renderer
  return renderer.createApp(rootComponent);
}
