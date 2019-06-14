import path from 'path';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import responseTime from 'response-time';
import { renderServerSideApp } from './renderServerSideApp';
import bodyParser from 'body-parser';

// This export is used by our initialization code in /scripts
export const app = express();
const { PUBLIC_URL = '' } = process.env;

app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve generated assets
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, '../build'), {
    maxage: Infinity
  })
);

// Serve static assets in /public
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, '../public'), {
    maxage: '30 days'
  })
);

app.use(morgan('tiny'));

app.use(
  responseTime((_req, res, time) => {
    res.setHeader('X-Response-Time', time.toFixed(2) + 'ms');
    res.setHeader('Server-Timing', `renderServerSideApp;dur=${time}`);
  })
);

// add any RESTFUL endpoints here

app.use(renderServerSideApp);
