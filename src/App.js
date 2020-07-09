// template -> render
import {
  defineComponent,
  h,
  reactive,
  onUnmounted,
  onMounted,
} from "@vue/runtime-core";

import { getGame } from "./Game";
import Ball from "./components/Ball";
import logoImg from "./assets/logo.png";

const randomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const createBall = () => {
  const radius = randomNum(25, 100);
  return {
    x: randomNum(radius, 750 - radius),
    y: randomNum(radius, 1080 - radius),
    xSpeed: randomNum(5, 50),
    ySpeed: randomNum(5, 50),
    radius,
  };
};

export default defineComponent({
  setup(props, ctx) {
    const balls = reactive([createBall()]);

    const handleAddBall = (info) => {
      balls.push(createBall());
    };

    onMounted(() => {
      getGame().ticker.add(() => {
        // 让子弹动起来
        moveBalls(balls);
        // 碰撞检测
      });
    });

    onUnmounted(() => {});

    return { balls, handleAddBall };
  },
  render(ctx) {
    const renderBalls = () => {
      return ctx.balls.map((info) => {
        return h(Ball, {
          x: info.x,
          y: info.y,
          radius: info.radius,
        });
      });
    };
    return h("Container", [
      h("text", {
        text: "点我",
        interactive: true,
        onClick: ctx.handleAddBall,
      }),
      ...renderBalls(),
    ]);
  },
});

const moveBalls = (balls) => {
  balls.forEach((ball) => {
    let { x, y, xSpeed, ySpeed, radius } = ball;
    if (x >= 750 - radius || x <= radius) {
      ball.xSpeed = -xSpeed;
    }

    if (y >= 1080 - radius || y <= radius) {
      ball.ySpeed = -ySpeed;
    }

    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
  });
};
