export default function count(state={value:0,payload:[]},action){
	console.log('reducer called');
	switch(action.type) {
	case 'increment' :
	return Object.assign({},state,{value:action.payload}); 
	default :
	return Object.assign({},state);
	}
}	