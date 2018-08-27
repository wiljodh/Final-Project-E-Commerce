import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie'

export default class Logout extends Component {
  render() {

    const cookies = new Cookies();
    cookies.remove("GetID")

    if (cookies.get("GetID") === undefined){
        return <Redirect to= "/Homepage" />
    }

    return (
      <div>
        
      </div>
    )
  }
}
