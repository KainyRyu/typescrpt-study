{
  const requestData = [
    { date: '20211119', count: 15, sale: 19400, totalSales: 0 },
    { date: '20211123', count: 1, sale: 1000, totalSales: 0 },
    { date: '20211124', count: 3, sale: 10800, totalSales: 0 },
    { date: '20211125', count: 3, sale: 6900, totalSales: 0 },
    { date: '20211126', count: 7, sale: 13700, totalSales: 0 },
    { date: '20211129', count: 26, sale: 38500, totalSales: 0 },
    { date: '20211206', count: 123, sale: 703100, totalSales: 0 },
    { date: '20211207', count: 175, sale: 947700, totalSales: 0 },
    { date: '20211208', count: 187, sale: 1165500, totalSales: 0 },
    { date: '20211209', count: 221, sale: 1180600, totalSales: 0 },
    { date: '20211210', count: 204, sale: 1047400, totalSales: 0 },
    { date: '20211211', count: 337, sale: 1480000, totalSales: 0 },
    { date: '20211212', count: 340, sale: 1536800, totalSales: 0 },
    { date: '20211213', count: 284, sale: 1436300, totalSales: 0 },
    { date: '20211214', count: 225, sale: 1287300, totalSales: 0 },
    { date: '20211215', count: 220, sale: 1116300, totalSales: 0 },
    { date: '20211216', count: 224, sale: 1173000, totalSales: 0 },
    { date: '20211217', count: 232, sale: 1166900, totalSales: 0 },
    { date: '20211218', count: 306, sale: 1271500, totalSales: 0 },
    { date: '20211219', count: 343, sale: 1744300, totalSales: 0 },
    { date: '20211220', count: 276, sale: 1443300, totalSales: 0 },
    { date: '20211221', count: 278, sale: 1408000, totalSales: 0 },
    { date: '20211222', count: 214, sale: 940400, totalSales: 0 },
    { date: '20211223', count: 263, sale: 1272400, totalSales: 0 },
    { date: '20211224', count: 247, sale: 1407400, totalSales: 0 },
    { date: '20211225', count: 340, sale: 1379900, totalSales: 0 },
    { date: '20211226', count: 369, sale: 1709400, totalSales: 0 },
    { date: '20211227', count: 265, sale: 1252800, totalSales: 0 },
    { date: '20211228', count: 227, sale: 994400, totalSales: 0 },
    { date: '20211229', count: 224, sale: 1204900, totalSales: 0 },
    { date: '20211230', count: 263, sale: 1258700, totalSales: 0 },
    { date: '20211231', count: 255, sale: 1296100, totalSales: 0 },
    { date: '20220101', count: 331, sale: 1657800, totalSales: 0 },
    { date: '20220102', count: 354, sale: 1863700, totalSales: 0 },
    { date: '20220103', count: 273, sale: 1442500, totalSales: 0 },
    { date: '20220104', count: 265, sale: 1142300, totalSales: 0 },
    { date: '20220105', count: 245, sale: 1325100, totalSales: 0 },
    { date: '20220106', count: 241, sale: 1239800, totalSales: 0 },
    { date: '20220107', count: 238, sale: 1146300, totalSales: 0 },
    { date: '20220108', count: 312, sale: 1427400, totalSales: 0 },
    { date: '20220109', count: 343, sale: 1684100, totalSales: 0 },
    { date: '20220110', count: 318, sale: 1831100, totalSales: 0 },
    { date: '20220111', count: 263, sale: 1565800, totalSales: 0 },
    { date: '20220112', count: 244, sale: 1383000, totalSales: 0 },
    { date: '20220113', count: 245, sale: 1329000, totalSales: 0 },
    { date: '20220114', count: 263, sale: 1379200, totalSales: 0 },
    { date: '20220115', count: 386, sale: 1622000, totalSales: 0 },
    { date: '20220116', count: 438, sale: 2287500, totalSales: 0 },
    { date: '20220117', count: 330, sale: 1944800, totalSales: 0 },
    { date: '20220118', count: 352, sale: 2086200, totalSales: 0 },
    { date: '20220119', count: 354, sale: 2468600, totalSales: 0 },
    { date: '20220120', count: 384, sale: 2079100, totalSales: 0 },
    { date: '20220121', count: 469, sale: 3090600, totalSales: 0 },
    { date: '20220122', count: 649, sale: 3538100, totalSales: 0 },
    { date: '20220123', count: 740, sale: 4313200, totalSales: 0 },
    { date: '20220124', count: 688, sale: 4310700, totalSales: 0 },
    { date: '20220125', count: 540, sale: 4069000, totalSales: 0 },
    { date: '20220126', count: 551, sale: 4765400, totalSales: 0 },
    { date: '20220127', count: 569, sale: 3622500, totalSales: 0 },
    { date: '20220128', count: 635, sale: 4716500, totalSales: 0 },
    { date: '20220129', count: 731, sale: 4754200, totalSales: 0 },
    { date: '20220130', count: 814, sale: 5729400, totalSales: 0 },
    { date: '20220131', count: 836, sale: 5260500, totalSales: 0 },
    { date: '20220201', count: 831, sale: 5551400, totalSales: 0 },
    { date: '20220202', count: 870, sale: 5942400, totalSales: 0 },
    { date: '20220203', count: 675, sale: 4809500, totalSales: 0 },
    { date: '20220204', count: 607, sale: 4165400, totalSales: 0 },
    { date: '20220205', count: 670, sale: 4591100, totalSales: 0 },
    { date: '20220206', count: 793, sale: 5285300, totalSales: 0 },
    { date: '20220207', count: 604, sale: 3621700, totalSales: 0 },
    { date: '20220208', count: 577, sale: 3749800, totalSales: 0 },
    { date: '20220209', count: 542, sale: 3047300, totalSales: 0 },
    { date: '20220210', count: 504, sale: 3411000, totalSales: 0 },
    { date: '20220211', count: 469, sale: 3129400, totalSales: 0 },
    { date: '20220212', count: 550, sale: 3144800, totalSales: 0 },
    { date: '20220213', count: 544, sale: 3026200, totalSales: 0 },
    { date: '20220214', count: 402, sale: 2459000, totalSales: 0 },
    { date: '20220215', count: 171, sale: 956100, totalSales: 0 }
  ];

  const monthlyData = (data, month) =>
    data.filter(({ date, count }) => date.includes(month));

  const counts = data => data.map(({ count }) => count);
  const sales = data => data.map(({ sale }) => sale);
  const totalSales = data => data.map(({ totalSales }) => totalSales);

  const dec = monthlyData(requestData, '202112');
  const jan = monthlyData(requestData, '202201');

  const sum = counts => counts.reduce((total, curr) => total + curr);

  const decCounts = sum(counts(dec));
  const decSales = sum(sales(dec));
  const dectotalSales = sum(totalSales(dec));
  const janCounts = sum(counts(jan));
  const janSales = sum(sales(jan));
  const jantotalSales = sum(totalSales(jan));
  // console.log(sum(counts(dec)))
  // console.log(sum(sales(dec)))
  console.log({ decCounts, decSales, dectotalSales });
  console.log({ janCounts, janSales, jantotalSales });
}
