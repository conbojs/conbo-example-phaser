import * as Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import MainScene from './scenes/MainScene';

/**
 * Your Phaser game starts here!
 * @author	Neil Rackett
 */
export default class MyGame extends Phaser.Game
{
	constructor(options:any)
	{
		super
		({
			backgroundColor: 0x000000,
			width: 800,
			height: 600,
			type: Phaser.AUTO,
			parent: options.el,

			physics: 
			{
				default: 'arcade',
				arcade: { debug:true }
			}
		});

		this.scene.add('Boot', BootScene, true, options);
		this.scene.add('Main', MainScene, false, options);
	}
}
