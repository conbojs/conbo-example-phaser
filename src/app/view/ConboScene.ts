import * as Phaser from 'phaser';
import { Inject, bindAll, Context } from 'conbo';
import MyModel from '../model/MyModel';

/**
 * Scene base class used for ConboJS integration
 * @author	Neil Rackett
 */
export default class ConboBase extends Phaser.Scene
{
	@Inject	protected myModel:MyModel;

	public init():void
	{
		// Inject defined properties into the class
		this.context.injectSingletons(this);

		// Make sure "this" refers to this class instance in all your functions
		bindAll(this);		
	}

	// Get the reference to your context class that we added to the scene definition in MyGame.ts
	protected get context():Context
	{
		return this.scene.settings.data.context;
	}
}
