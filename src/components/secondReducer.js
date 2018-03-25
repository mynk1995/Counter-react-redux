export default function maxCount(state={value:100},action){
	console.log('reducer called');
	switch(action.type) {
	case 'increment' :
	return Object.assign({},state,{value:action.payload}); 
	default :
	return Object.assign({},state);
	}
}