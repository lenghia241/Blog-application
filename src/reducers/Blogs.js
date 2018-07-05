import * as types from "../constants/ActionTypes";

const initialState = {
  searchText: "all",
  blogs: [
    {
      id: "1",
      title: "Music change your life",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "music"
    },
    {
      id: "2",
      title: "Wear Nice clothes",
      content: "Zara, Gucci, HM , blabla...",
      category: "fashion"
    },
    {
      id: "3",
      title: "Healthy Lifestyle",
      content: "Biceps exercise...",
      category: "lifestyle"
    },
    {
      id: "4",
      title: "Developer Is So Cool",
      content: "React, React native, ........qweqwe",
      category: "work"
    },
    {
      id: "5",
      title: "Spain",
      content: "barcelona, Real madrid, Messi, Ronaldo",
      category: "travel"
    },
    {
      id: "6",
      title: "How To Become A Web Dev",
      content: "Keep Coding every day for 365 days...",
      category: "work"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_POST:
      return { ...state, blogs: [...state.blogs, action.data] };
    case types.DELETE_POST:
      return {
        ...state,
        blogs: [...state.blogs.filter(post => post.id !== action.id)]
      };
    case types.SORT_POST:
      return Object.assign({}, state, { searchText: action.sortBy });
    default:
      return state;
  }
};

export default reducer;
