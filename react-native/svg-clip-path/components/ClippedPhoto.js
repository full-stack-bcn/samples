import React from 'react'
import { StyleSheet } from 'react-native'
import Svg, { ClipPath, Defs, Image, Path } from 'react-native-svg'

const ClippedPhoto = ({ source, height, width }) => {
  return (
    // 1) First, with a vector graphics editor, create a clipped image and cut the SVG.
    // 2) Go to https://react-svgr.com/playground/?native=true, 
    //    paste your SVG, export it to React Native and copy it as JSX code.
    // 3) Paste the resulting JSX code here.
    // 4) Adjust and change the image (receiving the source as a prop).
    <Svg height={height} width={width} viewBox="56 67 90 90">
      <Defs>
        <ClipPath clipPathUnits="userSpaceOnUse" id="clip">
          <Path
            d="M128.404 153.43l-27.94-11.104-26.437 11.555 1.926-30.003-19.158-21.573 29.13-7.44 14.596-24.887 16.077 25.405 28.18 6.192-19.193 23.14z"
          />
        </ClipPath>
      </Defs>
      <Image
        y={70.313}
        x={57.474}
        width={90}
        height={90}
        preserveAspectRatio="none"
        href={source}
        clipPath="url(#clip)" />
    </Svg>
  )
}

export default ClippedPhoto

const styles = StyleSheet.create({})
