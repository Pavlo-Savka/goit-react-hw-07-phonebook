export const getContacts = state => {
//  console.log(state.contacts.items);
  return state.contacts.items;
};

export const getFilterValue = state => {
    return state.filter;
};

  