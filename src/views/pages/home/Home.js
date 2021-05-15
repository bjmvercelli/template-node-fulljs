import { api } from '../../../service/api';


const getJokesRandom = async () => {
  const request = await api.get('random')
  return request.data
}

const getJokesCategory = async () => {
  const request = await api.get('categories')
  return request.data
}

let Home = {
  is_private: false,



  render: async () => {
    const jokes = await getJokesRandom();
    const categories = await getJokesCategory();
    console.log(jokes)

      let view = `
          <h1>Afya Labs - Chuck Norris</h1>
          <div class="view">
          <img src=${jokes.icon_url} class="content-image">
           <ul class="menu-list">
            ${categories.map( (category, index) => (
              `<li class="menu-item" key=${index}>${category}</li>`
            )).join('')}
           </ul>
            <div class="content-joke">
              <h1>${jokes.value}</div>
            </div>
          </div>
      `;

      return view
  },

  after_render: async () => {

  }
}

export default Home;