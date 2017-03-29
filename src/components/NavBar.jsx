var React = require('react');
var NavItem = require('./NavItem.jsx');
var Box = require('./Box.jsx');

var menu = [
  {
	"name": "Home",
	"code":"123"
  },
  {
	"name": "Contact",
	"code":"23432"
  },
  {
	"name": "Location",
	"code":"456323"
  }
];

var NavBar = React.createClass({
	onAlert: function(event){ //comunicacion padre e hijo
		alert("Clickeadp")
	},
	render: function(){
    	return(
			<div className="row" >
				<nav className="navbar navbar-default" role="navigation">
					<div className="navbar-header" >
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
							<span className="sr-only">Desplegar Navegacion</span>
							<span className="icon-bar" ></span>
							<span className="icon-bar" ></span>
							<span className="icon-bar" ></span>
						</button>
						<a className="navbar-brand">Ejemplo De Soft </a>
					</div>
					<div className="collapse navbar-collapse navbar-ex1-collapse">
						<ul className="nav navbar-nav">
							{menu.map(function(currentValue, index, array){
								return <NavItem
											key={currentValue.code}
											name={currentValue.name}
											isFristOne={index == 0 ? true:false}
											onClick={this.onAlert}
										/>
							}.bind(this))}
						</ul>
					</div>
				</nav>
				<Box/>
			</div>
		);
	}
});

module.exports = NavBar;