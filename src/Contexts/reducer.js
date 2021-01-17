export const initialState = {
  user: null,
  playing: false,
  item: null,
  //REMOVE TOKEN AFTER DEVELOPING
  //token: 'BQAIKFUan3juZx5cZ3zVTY8b0fSRpi2XEwKO-oE-Ubzy2PfxHm…TOIAkiFgjZqJmk_aO-HdldRKxSfql4R3p9OS-xRSAVD2fFQUK',
  playlists: null,
  discover_weekly: null,
};
 
const reducer = (state, action) => {
  console.log(action);

  //Action -> type, [payload]

  switch (action.type) {
    case 'SET_USER':

      return {
        ...state,
        user: action.user,
      };
    
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      }
  
    default:
      return state;
  }
};

export default reducer;