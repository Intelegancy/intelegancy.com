import React, { FC } from 'react'
import styled from 'styled-components'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, RoundedBox } from '@react-three/drei'


// const Box = () => {
    
//     return (
        
//         <mesh
//             position={ [0, 0, 0] }
//         >
        
//             <boxBufferGeometry args={ [1, 1, 1] } />
        
//             <meshLambertMaterial color={ 0x3333ff } />
        
//         </mesh>
    
//     )

// }


const StyledCanvas = styled(Canvas)`

    width: 100%;
    height: 50vh !important;

    @media only screen and (orientation: landscape) {

        display: block;
        margin: 0 auto;
        max-width: 80%;

        @media only screen and (min-width: 800px) {

            max-width: 100%;
        
        }

    }

`

const CanvasComponent: FC = () => {

    return (

        <StyledCanvas camera={{ position: [0, 1, 1.5] }}>

            {/* <OrbitControls autoRotate enableZoom={ false } rotateSpeed={ 0.33 } /> */}
        
            <ambientLight intensity={0.5} />
        
            <spotLight position={[10, 15, 10]} angle={0.3} />

            {/* <Box /> */}
            
            <RoundedBox
                args={ [0.4, 0.1, 0.1] } // Width, Height and Depth of the box
                radius={ 0.05 } // Border-Radius of the box
                smoothness={ 4 } // Optional, number of subdivisions
                position={ [0, 0, 0] }
                // {...meshProps} // All THREE.Mesh props are valid
            >
                <meshPhongMaterial color={ 0x5c79e2 } />
            </RoundedBox>

            <RoundedBox
                args={ [0.1, 0.4, 0.1] } // Width, Height and Depth of the box
                radius={ 0.05 } // Border-Radius of the box
                smoothness={ 4 } // Optional, number of subdivisions
                position={ [0, 0, 0] }
                material={ 'MeshPhongMaterial' }
                // {...meshProps} // All THREE.Mesh props are valid
            >

                <meshPhongMaterial color={ 0x5c79e2 } />

            </RoundedBox>

        </StyledCanvas>
    
    )

}


export default CanvasComponent
