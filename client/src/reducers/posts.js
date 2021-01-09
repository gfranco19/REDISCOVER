// using reducers as a function that takes in the state and action. with reducers state must equal an initial value which in our case is posts //

export default (posts = [], action) => {
   switch (action.type) {
       case 'FETCH_ALL':
           return action.payload;
        case 'CREATE':
            return posts; 
       default:
           return posts;
   }
}