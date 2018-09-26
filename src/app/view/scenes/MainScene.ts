import ConboScene from '../ConboScene';
import { Inject, formatNumber } from 'conbo';
import MyModel from '../../model/MyModel';

/**
 * Main scene
 * @author	Neil Rackett
 */
export default class BootScene extends ConboScene
{
	@Inject protected myModel:MyModel;

	protected rect:Phaser.GameObjects.Rectangle;
	protected text:Phaser.GameObjects.Text;

	public create():void 
	{
		let style = 
		{
			font: 'bold 42px sans-serif',
			fill: '#00FF00',
			boundsAlignH: 'center',
			boundsAlignV: 'middle'
		};

		this.rect = this.add
			.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x000000)
			.setInteractive()
			.setOrigin(0, 0)
			.on('pointerdown', () => ++this.myModel.clickCount)
			;

		this.text = this.add
			.text(this.cameras.main.width/2, this.cameras.main.height/2, '', style)
			.setOrigin(0.5, 0.5)
			;

		this.myModel.addEventListener('change:clickCount', this.updateText);
		this.updateText();
	}

	protected updateText():void
	{
		this.text.text = `I've been clicked ${formatNumber(this.myModel.clickCount)} times!`;
	}
}
