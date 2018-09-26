import { Context } from 'conbo';

import MyModel from '../model/MyModel';

export default class MyContext extends Context
{
	protected initialize()
	{
		this.mapSingleton('myModel', MyModel, {name:'conboPhaserExample'});
	}
}
