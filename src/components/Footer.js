import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartLink from "./Cart/CartLink";

export default class Footer extends Component {
    render() {
        return (
<>
        <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
              <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © Megadev 2022</span>
            </div>
          </footer>
        
</>

        )
    }
}


