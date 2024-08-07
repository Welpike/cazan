
export declare type CRenderingContext = CanvasRenderingContext2D  // | WebGLRenderingContext | WebGL2RenderingContext

/**
 * IMPORTANT: this is only a prototype of scheme.
 */
export declare type Config = {
    name: string
    version: string
    authors: string[]
    useAutoplayForMultimedia?: boolean
    plugins?: ConfigPlugin[]
}

export declare type ConfigPlugin = {
    name: string
    version?: string
    path?: string
}
