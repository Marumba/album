import Home from "./container/Home";
import PhotoList from "./container/PhotoList";

export default [
	{
		path: '/',
		exact: true,
		component: Home,
	},	
	{
		path: '/album/:id',
		exact: true,
		component: PhotoList,
	}
];
