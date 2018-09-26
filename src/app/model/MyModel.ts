import { LocalHash, Bindable } from 'conbo';

/**
 * Simple model that saves data to local storage, but could easily be a web service, etc
 * @author	Neil Rackett
 */
export default class MyModel extends LocalHash
{
	@Bindable public clickCount:number;

	protected declarations():void
	{
		// Default values
		this.clickCount = 0;
	}
}
