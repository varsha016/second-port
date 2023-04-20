import React from 'react'
import Particles from 'react-tsparticles'
import MakeBackeground from '../MakeBackeground'
import { loadFull } from "tsparticles";

function HomeBg() {
    return <>
        <Particles params={MakeBackeground}>

        </Particles>

    </>
}

export default HomeBg