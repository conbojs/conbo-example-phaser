import './PhaserExample.scss';
import * as conbo from 'conbo';
import { Application, Viewable } from 'conbo';
import MyContext from './core/MyContext';
import MyGame from './view/MyGame';

/**
 * Phaser 3 integration example for ConboJS
 * @author	Neil Rackett
 */
@Viewable('conbo.example.phaser', 'PhaserExample')
export default class PhaserExample extends Application
{
	protected game:MyGame;

	protected declarations():void
	{
		this.namespace = conbo('conbo.example.phaser');
		this.contextClass = MyContext;
	}

	protected initialize():void
	{
		console.info('Hello from the ConboJS-Phaser 3 example!');

		// Instantiate your game, passing a reference to the context and container
		this.game = new MyGame(this.context.addTo({el:this.el}));
	}
}
