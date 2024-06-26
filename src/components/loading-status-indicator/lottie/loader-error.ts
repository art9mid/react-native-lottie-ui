import { useMemo } from 'react';

import { type LottieColor } from '../../../helpers/convert-lottie-color-to-rgb';

const useGetLoaderErrorJSON = (color: LottieColor) => {
  return useMemo(() => {
    return {
      nm: 'loader-check',
      ddd: 0,
      h: 64,
      w: 64,
      meta: { g: '@lottiefiles/creator 1.14.0' },
      layers: [
        {
          ty: 0,
          nm: 'check',
          sr: 1,
          st: 0,
          op: 24,
          ip: 0,
          hd: false,
          ddd: 0,
          bm: 0,
          hasMask: false,
          ao: 0,
          ks: {
            a: { a: 0, k: [27.0004, 25.881100000000004], ix: 1 },
            s: { a: 0, k: [120, 120], ix: 6 },
            sk: { a: 0, k: 0 },
            p: { a: 0, k: [0, 0], ix: 2 },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: { a: 0, k: 100, ix: 11 },
          },
          w: 118.31075013732911,
          h: 120.52074983215331,
          refId:
            'comp_0_dcf4d207-44cc-4b07-a995-b6aca93c84dc_549c6de9-7755-43b6-bfeb-dadee1180162',
          ind: 1,
          parent: 2,
        },
        {
          ty: 4,
          nm: 'green circle',
          sr: 1,
          st: -109,
          op: 24,
          ip: 0,
          hd: false,
          ddd: 0,
          bm: 0,
          hasMask: false,
          ao: 0,
          ks: {
            a: { a: 0, k: [0, 0], ix: 1 },
            s: {
              a: 1,
              k: [
                {
                  o: { x: 0.21, y: 0 },
                  i: { x: 0, y: 1 },
                  s: [0, 0, 100],
                  t: 0,
                },
                { s: [100, 100, 100], t: 12 },
              ],
              ix: 6,
            },
            sk: { a: 0, k: 0 },
            p: { a: 0, k: [32, 32], ix: 2 },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: { a: 0, k: 100, ix: 11 },
          },
          shapes: [
            {
              ty: 'gr',
              bm: 0,
              hd: false,
              mn: 'ADBE Vector Group',
              nm: 'Ellipse 1',
              ix: 1,
              cix: 2,
              np: 3,
              it: [
                {
                  ty: 'el',
                  bm: 0,
                  hd: false,
                  mn: 'ADBE Vector Shape - Ellipse',
                  nm: 'Ellipse Path 1',
                  d: 1,
                  p: { a: 0, k: [0, 0], ix: 3 },
                  s: { a: 0, k: [64, 64], ix: 2 },
                },
                {
                  ty: 'fl',
                  bm: 0,
                  hd: false,
                  mn: 'ADBE Vector Graphic - Fill',
                  nm: 'Fill 1',
                  c: { a: 0, k: color, ix: 4 },
                  r: 1,
                  o: { a: 0, k: 100, ix: 5 },
                },
                {
                  ty: 'tr',
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  sk: { a: 0, k: 0, ix: 4 },
                  p: { a: 0, k: [0, 0], ix: 2 },
                  r: { a: 0, k: 0, ix: 6 },
                  sa: { a: 0, k: 0, ix: 5 },
                  o: { a: 0, k: 100, ix: 7 },
                },
              ],
            },
          ],
          ind: 2,
        },
      ],
      v: '5.7.0',
      fr: 24,
      op: 24,
      ip: 0,
      assets: [
        {
          nm: '',
          id: 'comp_0_dcf4d207-44cc-4b07-a995-b6aca93c84dc_549c6de9-7755-43b6-bfeb-dadee1180162',
          layers: [
            {
              ty: 4,
              nm: 'Shape Layer - SVG',
              sr: 1,
              st: 0,
              op: 378,
              ip: 0,
              hd: false,
              ddd: 0,
              bm: 0,
              hasMask: false,
              ao: 0,
              ks: {
                a: { a: 0, k: [14.999999523162842, 14.999999523162842] },
                s: { a: 0, k: [100, 100] },
                sk: { a: 0, k: 0 },
                p: { a: 0, k: [27.0004, 25.8811] },
                r: { a: 0, k: 0 },
                sa: { a: 0, k: 0 },
                o: { a: 0, k: 100 },
              },
              shapes: [
                {
                  ty: 'gr',
                  bm: 0,
                  hd: false,
                  nm: 'Group 1',
                  it: [
                    {
                      ty: 'sh',
                      bm: 0,
                      hd: false,
                      nm: 'Path 1',
                      d: 1,
                      ks: {
                        a: 0,
                        k: {
                          c: true,
                          i: [
                            [0, 0],
                            [0.1949999, -0.1955000999999994],
                            [0, 0],
                            [-0.39100009999999985, -0.3899999000000003],
                            [0, 0],
                            [0, 0],
                            [-0.39100009999999985, -0.39000000000000057],
                            [0, 0],
                            [-0.3899999000000003, 0.39099999999999824],
                            [0, 0],
                            [0, 0],
                            [-0.39000000000000057, 0.39099999999999824],
                            [0, 0],
                            [0.39099999999999824, 0.39000000000000057],
                            [0, 0],
                            [0, 0],
                            [0.39099999999999824, 0.39000000000000057],
                            [0, 0],
                            [0.39000000000000057, -0.39100009999999985],
                            [0, 0],
                            [0, 0],
                            [0.25587499999999963, 0],
                          ],
                          o: [
                            [-0.25587499999999963, 0],
                            [0, 0],
                            [-0.39100009999999985, 0.391],
                            [0, 0],
                            [0, 0],
                            [-0.39100009999999985, 0.3910000000000018],
                            [0, 0],
                            [0.391, 0.39099999999999824],
                            [0, 0],
                            [0, 0],
                            [0.39000000000000057, 0.39099999999999824],
                            [0, 0],
                            [0.39099999999999824, -0.3910000000000018],
                            [0, 0],
                            [0, 0],
                            [0.39099999999999824, -0.39000000000000057],
                            [0, 0],
                            [-0.3910000000000018, -0.39100009999999985],
                            [0, 0],
                            [0, 0],
                            [-0.1955, -0.1955000999999994],
                            [0, 0],
                          ],
                          v: [
                            [7, 4],
                            [6.2929688, 4.2929688],
                            [4.2929688, 6.2929688],
                            [4.2929688, 7.7070312],
                            [11.585938, 15],
                            [4.2929688, 22.292969],
                            [4.2929688, 23.707031],
                            [6.2929688, 25.707031],
                            [7.7070312, 25.707031],
                            [15, 18.414062],
                            [22.292969, 25.707031],
                            [23.707031, 25.707031],
                            [25.707031, 23.707031],
                            [25.707031, 22.292969],
                            [18.414062, 15],
                            [25.707031, 7.7070312],
                            [25.707031, 6.2929688],
                            [23.707031, 4.2929688],
                            [22.292969, 4.2929688],
                            [15, 11.585938],
                            [7.7070312, 4.2929688],
                            [7, 4],
                          ],
                        },
                      },
                    },
                    {
                      ty: 'fl',
                      bm: 0,
                      hd: false,
                      nm: 'Fill',
                      c: { a: 0, k: [1, 1, 1] },
                      r: 1,
                      o: { a: 0, k: 100 },
                    },
                    {
                      ty: 'tr',
                      a: { a: 0, k: [0, 0] },
                      s: { a: 0, k: [100, 100] },
                      sk: { a: 0, k: 0 },
                      p: { a: 0, k: [0, 0] },
                      r: { a: 0, k: 0 },
                      sa: { a: 0, k: 0 },
                      o: { a: 0, k: 100 },
                    },
                  ],
                },
              ],
              ind: 1,
            },
          ],
        },
      ],
    };
  }, [color]);
};

export default useGetLoaderErrorJSON;
