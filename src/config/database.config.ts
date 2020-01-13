import {registerAs} from '@nestjs/config';
export default registerAs('database', () => ({
    host: process.env.Database_HOST,
    port: process.env.Database_PORT || 5432,
}));

