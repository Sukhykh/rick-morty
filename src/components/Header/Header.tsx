import React from 'react'
import { Pages } from '@enums/index'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			{Pages.map(page => (
				<NavLink key={page.title} to={page.route}>
					{page.title}
				</NavLink>
			))}
		</div>
	)
}

export default Header