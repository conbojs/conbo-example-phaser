import ConboScene from '../ConboScene';

/**
 * Preloader
 * @author	Neil Rackett
 */
export default class BootScene extends ConboScene
{
	public preload():void 
	{
		// TODO Load your assets and create a loader bar, etc
	}

	public update():void
	{
		this.scene.start('Main');
	}
}
