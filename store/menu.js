const state = () => {
    return {
      list: [
        {
            title: 'Dashboard',
            pageName: 'dashboard',
            url: 'dashboard',
            icon: 'home-icon'
        },
        {
            title: 'File Manager',
            pageName: 'file-manager',
            url: 'file-manager',
            icon: 'hard-drive-icon'
        },
        {
            title: 'Data List',
            pageName: 'datalist',
            url: 'data-list',
            icon: 'activity-icon'
        },
      ]
    }
  }
  
  // getters
  const getters = {
    list: state => state.list
  }
  
  // actions
  const actions = {}
  
  // mutations
  const mutations = {}
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  