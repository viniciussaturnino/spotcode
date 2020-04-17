import React from 'react'
import HomeScreen from './screens/home'
import DiscoveryScreen from './screens/discovery'
import FavoriteScreen from './screens/favorites'
import AlbumScreen from './screens/album'
import SearchScreen from './screens/search'
import { Switch, Route } from 'react-router-dom'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomeScreen}/>
        <Route exact path='/discovery' component={DiscoveryScreen}/>
        <Route exact path='/favorites' component={FavoriteScreen}/>
        <Route exact path='/album/:id' component={AlbumScreen}/>
        <Route exact path='/search' component={SearchScreen}/>
    </Switch>
)

export default Routes