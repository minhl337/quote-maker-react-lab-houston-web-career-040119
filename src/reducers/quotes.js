export default (state = [], action) => {
  let newState;
  let quote;

  switch(action.type){
    
    case "ADD_QUOTE":
    console.log(action.quote)
      return state.concat(action.quote)
    

    case "REMOVE_QUOTE":
      return state.filter(x=>x.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      newState = state.filter(x=>x.id !== action.quoteId);
      quote = state.find(x=>x.id === action.quoteId);
      quote.votes = quote.votes+1;
      newState.push(quote);
      return newState

    case "DOWNVOTE_QUOTE":
      newState = state.filter(x=>x.id !== action.quoteId);
      quote = state.find(x=>x.id === action.quoteId);
      if(quote.votes > 0){
        quote.votes = quote.votes-1;
      }
      newState.push(quote);
      return newState
    
      



    default:
    return state;
  }

}
