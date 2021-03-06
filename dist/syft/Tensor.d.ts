import { AsyncInstance, IAsyncConstructor } from '../lib';
export declare class Tensor extends AsyncInstance {
    type: string;
    delete(): Promise<void>;
    autograd(state: boolean): Promise<void>;
    get(paramName?: string, responseAsTensor?: boolean): Promise<Tensor | string>;
    protected cmd(options: {
        [key: string]: any;
        functionCall: string;
        tensorIndexParams?: any[];
    }): SocketCMD;
    isContiguous(): Promise<boolean>;
    getData(): Promise<number[] | string>;
    __repr__(verbose?: boolean): Promise<string>;
    batchify(dim: number, batchSize: number): Promise<this[]>;
    clamp(min?: number, max?: number): Promise<this>;
    equal(x: this): Promise<boolean>;
    lt(x: this): Promise<this>;
    lt_(x: this): Promise<this>;
    norm(dim?: number, keepdim?: boolean, p?: number): Promise<this>;
    random_(): Promise<this>;
    split(splitSizeOrSections: number, dim?: number): Promise<this[]>;
    abs(): Promise<this>;
    abs_(): Promise<this>;
    acos(): Promise<this>;
    acos_(): Promise<this>;
    addmm_(x: Tensor, y: Tensor): Promise<this>;
    addmm(x: Tensor, y: Tensor): Promise<this>;
    addmv_(x: Tensor, y: Tensor): Promise<this>;
    addmv(x: Tensor, y: Tensor): Promise<this>;
    asin(): Promise<this>;
    asin_(): Promise<this>;
    atan(): Promise<this>;
    atan_(): Promise<this>;
    backward(grad?: any): Promise<void>;
    ceil(): Promise<this>;
    ceil_(): Promise<this>;
    contiguous(): Promise<this>;
    copy(): Promise<this>;
    cos(): Promise<this>;
    cos_(): Promise<this>;
    cosh(): Promise<this>;
    cosh_(): Promise<this>;
    children(): Promise<never[]>;
    creationOp(): Promise<string | Tensor>;
    creators(): Promise<string[]>;
    cumsum(dim?: number): Promise<this>;
    dataOnGpu(): Promise<boolean>;
    exp(): Promise<this>;
    exp_(): Promise<this>;
    expand(...args: number[]): Promise<this>;
    indexAdd(indices: any, dim: number, x: Tensor): Promise<this>;
    indexAdd_(indices: any, dim: number, x: Tensor): Promise<this>;
    indexSelect(dim: number, indices: any): Promise<this>;
    keepgrad(): Promise<boolean>;
    pow(x: number | Tensor): Promise<this>;
    pow_(x: number | Tensor): Promise<this>;
    floor(): Promise<this>;
    floor_(): Promise<this>;
    round(): Promise<this>;
    round_(): Promise<this>;
    mm(x: Tensor): Promise<this>;
    grad(): Promise<string | Tensor>;
    neg(): Promise<this>;
    neg_(): Promise<this>;
    relu(): Promise<this>;
    save(filename: string): Promise<boolean>;
    set(paramName?: string, params?: any[]): Promise<void>;
    sigmoid_(): Promise<this>;
    sigmoid(): Promise<this>;
    sign(): Promise<this>;
    sign_(): Promise<this>;
    sin(): Promise<this>;
    sin_(): Promise<this>;
    size(): Promise<string | Tensor>;
    shape(asList?: boolean): Promise<number[]>;
    softmax(dim?: number): Promise<this>;
    std(dim?: number): Promise<this>;
    stride(dim?: number): Promise<number | number[]>;
    sqrt(): Promise<this>;
    sqrt_(): Promise<this>;
    trace(): Promise<this>;
    trunc(): Promise<this>;
    view(...args: any[]): Promise<this>;
    view_(...args: any[]): Promise<this>;
    viewAs(x: Tensor): Promise<this>;
    viewAs_(x: Tensor): Promise<this>;
    T(): Promise<this>;
    triu(k?: number): Promise<this>;
    triu_(k?: number): Promise<this>;
    unsqueeze(dim: number): Promise<this>;
    unsqueeze_(dim: number): Promise<this>;
    zero_(): Promise<this>;
    toString(): Promise<string>;
    cpu(): Promise<this>;
    gpu(): Promise<this>;
    arithmeticOperation(x: number | Tensor, name: string, inline?: boolean): Promise<this>;
    add(x: number | Tensor): Promise<this>;
    add_(x: number | Tensor): Promise<this>;
    sub(x: number | Tensor): Promise<this>;
    sub_(x: number | Tensor): Promise<this>;
    mul(x: number | Tensor): Promise<this>;
    mul_(x: number | Tensor): Promise<this>;
    div(x: number | Tensor): Promise<this>;
    div_(x: number | Tensor): Promise<this>;
    mod(x: number | Tensor): Promise<this>;
    mod_(x: number | Tensor): Promise<this>;
    sinh(): Promise<this>;
    sinh_(): Promise<this>;
    log(): Promise<this>;
    log_(): Promise<this>;
    log1p_(): Promise<this>;
    log1p(): Promise<this>;
    frac(): Promise<this>;
    frac_(): Promise<this>;
    reciprocal(): Promise<this>;
    reciprocal_(): Promise<this>;
    rsqrt(): Promise<this>;
    rsqrt_(): Promise<this>;
    remainder(x: number | Tensor): Promise<this>;
    remainder_(x: number | Tensor): Promise<this>;
    sample(dim: number): Promise<this>;
    tan(): Promise<this>;
    tan_(): Promise<this>;
    tanh(): Promise<this>;
    squeeze(dim?: number): Promise<this>;
    squeeze_(dim?: number): Promise<this>;
    min(dim?: number, keepdim?: boolean): Promise<this>;
    max(dim?: number, keepdim?: boolean): Promise<this>;
    sum(dim?: number, keepdim?: boolean): Promise<this>;
    prod(dim?: number, keepdim?: boolean): Promise<this>;
    mean(dim?: number, keepdim?: boolean): Promise<this>;
    static IntTensor: IntTensorConstructor;
    static FloatTensor: FloatTensorConstructor;
}
export interface IntTensorConstructor extends IAsyncConstructor {
    new ($caller$: any, id: string): IntTensor;
    get(id: string): Promise<IntTensor>;
    create(...args: any[]): Promise<IntTensor>;
}
export interface FloatTensorConstructor extends IAsyncConstructor {
    new ($caller$: any, id: string): FloatTensor;
    get(id: string): Promise<FloatTensor>;
    create(...args: any[]): Promise<FloatTensor>;
}
export declare class IntTensor extends Tensor {
    static $: IAsyncConstructor;
    type: string;
    static get(id: string): Promise<IntTensor>;
    static create(arr: any[] | {
        data: ArrayLike<number>;
        shape: ArrayLike<number>;
    }, autograd?: boolean): Promise<IntTensor>;
}
export declare class FloatTensor extends Tensor {
    static $: IAsyncConstructor;
    type: string;
    static get(id: string): Promise<FloatTensor>;
    static create(arr: any[] | {
        data: ArrayLike<number>;
        shape: ArrayLike<number>;
    }, autograd?: boolean): Promise<FloatTensor>;
}
