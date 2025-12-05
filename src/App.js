import React from "react";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Items from "./components/Items.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Поезд',
          img: 'photo_2025-12-05_16-01-37.jpg',
          desc: 'Подарочный конструктор поезда с рельсами',
          category: 'игрушки',
          price: '2500'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'photo_2025-12-05_16-01-32.jpg',
          desc: 'Компьютерный стол без стула',
          category: 'мебель',
          price: '4800'
        },
        {
          id: 3,
          title: 'Диван бескаркасный',
          img: 'photo_2025-12-05_16-01-00.jpg',
          desc: 'мягкий диван раскладной бескаркасный',
          category: 'мебель',
          price: '37 000',
        },

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>

    )
  }
}

export default App;

