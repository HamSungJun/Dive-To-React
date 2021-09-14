import React from 'react'
export const someElement = <h1>JSX Element</h1>
export const createGreeter = ({ name }: {name: string}) => (<h1>Hello, {decorateName({ name, decorator: '*' })}!</h1>)
export const decorateName = ({ name, decorator }: {name: string, decorator: string}): string => `${decorator}${name}${decorator}`
export const wrappedImage = ({ src }: {src: string}) => (<div className="image-wrapper"><img src={src} alt="" /></div>)
export const escaped = ({ str }: {str: string}) => (<h1>{str}</h1>)
