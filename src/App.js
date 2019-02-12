import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    titleCon:[
      {
        title: "总销售额",
        price: "1264646",
        bg: "#eee",
        index: 0
      },
      {
        title: "访问量",
        price: "5454",
        bg: "red",
        index: 1
      },
      {
        title: "支付笔数",
        price: "56565",
        bg: "yellow",
        index: 2
      },
      {
        title: "运营活动效果",
        price: "877878",
        bg: "blue",
        index: 3
      },
      {
        title: "支付笔数",
        price: "56565",
        bg: "gray",
        index: 4
      },
      {
        title: "运营活动效果",
        price: "877878",
        bg: "black",
        index: 5
      },
      {
        title: "运营活动效果",
        price: "877878",
        bg: "green",
        index: 6
      }
    ]
  };

  beforeItem() {
  let bg = this.state.titleCon[0].bg
  let title =  this.state.titleCon[0].title
  let newIndex = this.state.titleCon[0].index
   this.state.titleCon.shift()
   let content =  this.state.titleCon
   content.forEach((item)=>{
     let tmpBg = bg
     let tmpTitle = title
     bg = item.bg
     title = item.title
    item.bg = tmpBg
    item.title = tmpTitle
   })
   this.state.titleCon.push({index:newIndex,bg,title:'title'+newIndex})
    this.setState({
      titleCon: content
    })
  }
  afterItem() {
    let bg = this.state.titleCon[6].bg
    let newIndex = this.state.titleCon[6].index
     this.state.titleCon.unshift({index:newIndex,bg,title:'title'+bg})
     this.state.titleCon.pop()
     let content =  this.state.titleCon
     content.reverse().forEach((item)=>{
      let tmpBg = bg
      bg = item.bg
     item.bg = tmpBg
    })
      this.setState({
        titleCon:content.reverse()
      }) 
    }
  render() {
    let {titleCon} = this.state
    return (
      <section className="rows"> 
        <section className="con_wrapper">
          <section onClick={this.beforeItem.bind(this)} className="left_con">{"<"}</section>
          <section className="item_con">
            {titleCon.map((item,index)=>{
              return (
                <div style={{background:item.bg}} key={index} className={'item_'+item.index} >{item.title}{item.index}</div>
              )
            })}
           
          </section>
          <section className="right_con" onClick={this.afterItem.bind(this)} >{">"}</section>
        </section>
      </section>
    );
  }
}

export default App;
