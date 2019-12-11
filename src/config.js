import game from "./game";

export const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: {
        preload: game.preload,
        create: game.create,
        update: game.update
    }
};
