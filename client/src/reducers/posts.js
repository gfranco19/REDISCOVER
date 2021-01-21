// using reducers as a function that takes in the state and action. with reducers state must equal an initial value which in our case is posts //

export default (posts = [], action) => {
   switch (action.type) {
            // return all posts but filter out the deleted post then dispatch the action in components// 
        case 'DELETE':
              return posts.filter((post) => post._id !== action.payload)
            // action.payload will be the updated post otherwise just return the post without updates //
<<<<<<< HEAD
          case 'UPDATE':
           // both update and like cases can do the same thing if not they will return the original post //  
          case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
          case 'FETCH_ALL':
           return action.payload;
          case 'CREATE':
            return [...posts, action.payload];
            case 'FETCH':
              return action.payload;
=======
        case 'UPDATE':
           // both update and like cases can do the same thing if not they will return the original post //  
        case 'LIKE':
              return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
              return action.payload;
        case 'CREATE':
              return [...posts, action.payload];
>>>>>>> f940eda20b3a050607576b28197a695363044b8a
       default:
           return posts;
   }
}