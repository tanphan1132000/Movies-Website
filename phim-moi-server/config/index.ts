let secret: string = process.env.NODE_ENV === 'production' ? process.env.SECRET! : 'secret';

export { secret };