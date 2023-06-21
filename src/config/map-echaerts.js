import * as echarts from "echarts"

const initmap = (props) => {
  echarts.registerMap("丹东", getData());
  let data = getData().features.map((item) => {
  return {
    name: item.properties.name,
  };
  });
  
  const points = [
      [116.289929,40.265374],
      [116.754101,40.063877],
      [116.229504,39.764735],
      [115.883434,39.899721]
  ]
  let option = {
  backgroundColor:"#030528",
  geo: [
    {
      map: "丹东",
      aspectScale: 1,
      zoom: 0.65,
      layoutCenter: ["50%", "50%"],
      layoutSize: "180%",
      show: true,
      roam: false,
      label: {
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          borderColor: "#c0f3fb",
          borderWidth: 1,
          shadowColor: "#8cd3ef",
          shadowOffsetY: 10,
          shadowBlur: 120,
          areaColor: "transparent",
        },
      }
    },
    // 重影
    {
      type: "map",
      map: "丹东",
      zlevel: -1,
      aspectScale: 1,
      zoom: 0.65,
      layoutCenter: ["50%", "51%"],
      layoutSize: "180%",
      roam: false,
      silent: true,
      itemStyle: {
        normal: {
          borderWidth: 1,
          // borderColor:"rgba(17, 149, 216,0.6)",
          borderColor: "rgba(58,149,253,0.8)",
          shadowColor: "rgba(172, 122, 255,0.5)",
          shadowOffsetY: 5,
          shadowBlur: 15,
          areaColor: "rgba(5,21,35,0.1)",
        },
      },
    },
    {
      type: "map",
      map: "丹东",
      zlevel: -2,
      aspectScale: 1,
      zoom: 0.65,
      layoutCenter: ["50%", "52%"],
      layoutSize: "180%",
      roam: false,
      silent: true,
      itemStyle: {
        normal: {
          borderWidth: 1,
          // borderColor: "rgba(57, 132, 188,0.4)",
          borderColor: "rgba(58,149,253,0.6)",
          shadowColor: "rgba(65, 214, 255,1)",
          shadowOffsetY: 5,
          shadowBlur: 15,
          areaColor: "transpercent",
        },
      },
    },
    {
      type: "map",
      map: "丹东",
      zlevel: -3,
      aspectScale: 1,
      zoom: 0.65,
      layoutCenter: ["50%", "53%"],
      layoutSize: "180%",
      roam: false,
      silent: true,
      itemStyle: {
        normal: {
          borderWidth: 1,
          // borderColor: "rgba(11, 43, 97,0.8)",
          borderColor: "rgba(58,149,253,0.4)",
          shadowColor: "rgba(58,149,253,1)",
          shadowOffsetY: 15,
          shadowBlur: 10,
          areaColor: "transpercent",
        },
      },
    },
    {
      type: "map",
      map: "丹东",
      zlevel: -4,
      aspectScale: 1,
      zoom: 0.65,
      layoutCenter: ["50%", "54%"],
      layoutSize: "180%",
      roam: false,
      silent: true,
      itemStyle: {
        normal: {
          borderWidth: 5,
          // borderColor: "rgba(11, 43, 97,0.8)",
          borderColor: "rgba(5,9,57,0.8)",
          shadowColor: "rgba(29, 111, 165,0.8)",
          shadowOffsetY: 15,
          shadowBlur: 10,
          areaColor: "rgba(5,21,35,0.1)",
        },
      },
    },
  ],
  series: [
    {
      name: "丹东市数据",
      type: "map",
      map: "丹东", // 自定义扩展图表类型
      aspectScale: 1,
      zoom: 0.65, // 缩放
      showLegendSymbol: true,
      label: {
        normal: {
          show: true,
          textStyle: { color: "#fff", fontSize: "120%" },
        },
        emphasis: {
          // show: false,
        },
      },
      itemStyle: {
        normal: {
          areaColor: {
            type: "linear",
            x: 1200,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgba(3,27,78,0.75)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgba(58,149,253,0.75)", // 50% 处的颜色
              },
            ],
            global: true, // 缺省为 false
          },
          borderColor: "#fff",
          borderWidth: 0.2,
        },
        emphasis: {
          show: false,
          color: "#fff",
          areaColor: "rgba(0,254,233,0.6)",
        },
      },
      layoutCenter: ["50%", "50%"],
      layoutSize: "180%",
      markPoint: {
        symbol: "none",
      },
      data: data,
    },
    {
        type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 6 //图标大小
          },
          lineStyle: {
            normal: {
              color: 'rgba(255, 200, 113, 1)',
              width: 2, //尾迹线条宽度
              opacity: 1, //尾迹线条透明度
              curveness: 0.3, //尾迹线条曲直度
              shadowColor: 'rgba(255, 200, 113, 0.2)',
              shadowBlur: 10
            }
          },
          data: [
              [
                  points[0],
                  points[1],
              ],
              [
                  points[0],
                  points[2],
              ],
              [
                  points[0],
                  points[3],
              ],
              [
                points[1],
                points[3],
              ],
          ],
      },
      { // 动效散点公共配置项
        silent: true, // 暂不支持鼠标交互
        type: 'effectScatter',
        coordinateSystem: 'geo',
        rippleEffect: {
          //涟漪特效
          period: 4, //动画时间，值越小速度越快
          // brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 5 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name
            },
            fontSize: 13,
            color: 'white'
          },
          emphasis: {
            show: true
          }
        },
        symbol: 'circle',
        symbolSize: 10,
        itemStyle: {
          normal: {
            show: false,
            borderWidth: 1,
            color: 'rgba(255, 86, 11, 1)'
          }
        },
        data: [
          {
            name:"城市A",
            value:[
                      ...points[0],
                      323
                  ]
          },
          {
            name:"城市B",
            value:[
                      ...points[1],
                      323
                  ]
          },

          {
            name:"城市C",
            value:[
                      ...points[2],
                      323
                  ]
          },
          {
            name:"城市C",
            value:[
                      ...points[3],
                      323
                  ]
          }
        ],
      } 
  
  ],
  };
  function getData() {
let res = {"type":"FeatureCollection","features":[{"id":"110101","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DB@DP@NCHB@XD@AED@BKB@@CD@@AV@@EJ@@EAB@KB@AA@AP@CDJ@@CD@@EACB@FBD@BAACCCAG@QI@CB@A@@@BE@B_BWLBN@@CE@@AB@@KH@@AD@@AC@@CIB@AC@DWCKi@MAE@@CD@@@@EB@@AA@@CC@BGC@@AG@CBM@@AI@@HC@@BC@@DE@@DKCIBFB@HfBAvCB@PG@BHA@@BB@ATJ@@BF@AJC@AXCB@bMA@H"],"encodeOffsets":[[119181,40920]]},"properties":{"cp":[116.418757,39.917544],"name":"东城区","childNum":1}},{"id":"110102","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@}EAB@HI@@DCBOAOBIC@NB@BLB@AFF@AB@LX@@DC@BJCBBHAF@VAbE@@BA@CDJDLABA@BDADBFBHADBAF@HHBBC@IJ@VHAhT@BJZ@@GGA@CCABCA@AMNB@aDABWD@BIE@@AI@BSA@@AB@AGH@@ODABueA"],"encodeOffsets":[[119174,40829]]},"properties":{"cp":[116.366794,39.915309],"name":"西城区","childNum":1}},{"id":"110105","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@@B@@@HCCA@BDBHAHA@A@BBC\\IA@KA@AJA@GpARB@AFD@BGB@BAD]`D@FF@ALB@AH@BDIB@@ID@BKB@@CC@FYB@@AA@BWB@@@BKCEA@@BOABCFEE@BIC@@AGDC@AH"],["@@@JI^sxHZBHBADGD@FBDD@DIVFDBBFA@@BA@AJF@AFDB@DLBdLJ@@AJ@NCD@@DFBBAD@@AD@BFB@ABBDBDC@@DCB@JHBADBBABJDADDB@B@HFAFGTC@AD@DCZ@HEJIHCVBJAJELKJEJJBA@CBCBBDAAAA@DECC@AIC@ADE`MFCHID@JEB@IFJ@BECCp[HAZAHANGEGNGJFLMBKG@AEKA@ABELB@CBAAEDQB_DMMHKBCIFI@CG@BCAKGBACLQSDBAA@BECAF@@IC@BGCABAD@@AC@BCDAEKEAG@DC@IZ@BQI@@GIQBAD@BCFGAAD@[US@BGF@KKAKBEE@@KAA@BMB@EOBHHSAAFGD@FE@@CC@SBS@EDCCAGAAEDE@ABC@@ALEACE@@CE@@DK@AFUBAEE@BGC@@CMED@BAE@@AGAABCA@FC@AD@CE@@CG@AGQEC@IJKAAFQL@AABQCADBFDBGFACG@@FM@@BI@@BN@BJFBBBA@BDDCD@BD@DD@AAB@@DF@AHJB@BB@ADF@FCBBBCDABFDA@DD@@BD@BFABGACD@BA@@AGF@AC@MH@AA@@CCD@DA@@BA@@JD@@DA@DLCXD@@BJA@DD@@BC@@BG@@LA@@BF@@DM@KAAXA`F@@A@@@BDAJ@@RBHDDBDABC@EAA@BD@FC@@DI@DCO@@BBBA@@LBA@FI@@FU@@BC@@DA@ALC@BFC@@WGAMDO@@CCABFB@ADDB@DHB@HY@"]],"encodeOffsets":[[[119390,41009]],[[119175,40933]]]},"properties":{"cp":[116.486409,39.921489],"name":"朝阳区","childNum":2}},{"id":"110106","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@@KBAE@BEA@AKA@@MJDPAPBDA@CJ@@GBA~F@GEAJALD@CF@@CD@@AD@@GJ@@BN@DAH@@BD@AHD@@DB@@BA@@F@@C@@DF@NBhABBB@@CC@@IB@@AB@@CDC@DB@@BNGD@@BHE@BB@@ADCJ@AEC@@AC@@CCBAECBADAAEDE@BCA@@AIABGE@@CA@BBC@@CACC@CDACB@AAEAAIM@@EG@@EA@IFAIHC@CBA@AA@BGE@EB@AAB@BC@AKB@JDDEBCB@@DF@DC@AB@@CA@@CJ@@QCA@BK@@IA@@CqA@CB@BGB]MAA`KA@AKBALO@@AE@@LCHF@CLS@AJSBBBK@AIWACEG@@EAG@OG@MW@CG@CDCBCDDBADC@IZBBA@EAAFJDCDICCH[CSIC@AFCDE@@EIABFALDF@DAJONCNEBUBA@BCCAY@@IDEKIEABICA@CEAACAA@[AOKB@DG@EBACG@BDC@BDKBO@ACCOGKABCECBAAKA@BE@ADAABA@AC@CCCDCCABBDA@AAG@EEC@@AG@AFA@@GA@AHCBBDCDBBB@BA@FA@@AC@@BFLD@BA@AB@BBD@@BBA@BH@B@C@@BFBGBBDE@ABI@AB@AA@AB@HE@CBAEABM@BEGACB@EAFAAC@BAACI@AFACA@BHCLBBADBD@DA@@B@DADANBHDBADC@F@ARB@@FGFAA@EA@CHA@CAAB@DAFKDEDMBMHDF@DHDDARDANEJHFPDRIHBJDLADB@DBDNBPHLBLFTFNBFAFD@FD@PCHDBCBBDEBBRGVAHDH@LGDEBCDBDACHF@DCH@@JH@@FJ@@LB@FABBDAAD@BH@@DB@BBB@DALDP@@AD@BD@@SBAFFHB@AADH@BBEBFDJBBBZ@"],"encodeOffsets":[[119118,40855]]},"properties":{"cp":[116.286968,39.863642],"name":"丰台区","childNum":1}},{"id":"110107","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@HIDCACBAHBJFBADODCNJBD@JJEFC@GCCBEAEBCDCF@@ELEHABGHCHIFCBCDA@CF@@EE@BIA@BA@AC@A@@AFCC@AC@@FAAAOA@CA@@KD@DCND@AD@R@HAJ@@BBDRABDJB@AAADCG@@A@AH@@eN@C@@CC@@BO@KCCBA@AAA@@CG@@ABCCBAAEBA@@KI@@EG@@IG@CDE@DGCBCAADCFKHG@KCUBMHAACFAACDKPKFABALKFEHENCDGBMDAB@HEJICADED@BGJDLB@B@JDEFBBEH@DDABDD@DL@BCB@BGDETJHbDNDFANJ"],"encodeOffsets":[[118940,40954]]},"properties":{"cp":[116.195445,39.914601],"name":"石景山区","childNum":1}},{"id":"110108","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@AC@EHCBCGAYAwGtHYBGAOS@@ABeUGI@@JADGA@GBECAGBEACACB@AABKBICDCB@@AF@Ba@UBEAGDAAID@@Cq@AAIAECFA@@A@@AG@BC@BGAEEAB@T{AYB@fG@@B@BH@CDBB@BIAACQBAC@AI@GBQ@C@@BMCCDC@@LB@@DPBBBEB@@BDD@ED@BB@D@@BABB@AJF@@FE@@DCBADEDGJGDAHGBKF@FE@CDADBFAFDD@HEDIF@IACMICDCPABIEGAABBDCDGJDB@DDBLDVDBFDDCB@DC@ADEDA@CBAFIDADC@GDEAGFCDQHI@KAC@@BMDQAIDE@ECUAGDC@GH@FADGN@DCDHN@FKHAD@FADGFCA@BCBEHCHCB@BDJFB@DDDLFBHNDBFDBBNHAFDDDDDJA@@HBFBDEB@BCDAHDFAHC^DDCF@BNh@bF@DCDH@AHCFANNDLF@HFF@F@BPCB@DHRBBMDG@KHEFAFFB@dMZ@A]A@@EE@DIEG@CHCNBJEDBBDCFBDJA@ABAACBA@C@CFA@CIABCDB@EPBBCAANYVHZmFDFCHB@CJDPMDBBAHFLBDGF@AJJ@AHF@BCDBADLBL@@FP@D@ACB@BAJ@FA@DBABGICBAEA@BAAABCA@GIADKD@@CJ@@EFBBAH@JAD@"],"encodeOffsets":[[119185,41003]]},"properties":{"cp":[116.310316,39.956074],"name":"海淀区","childNum":1}},{"id":"110109","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@GCODC@@EECEBMASEKEKAOGMAAC@CCAKBICGAQJOCGEFIBMQCCBGC@CCEG@IBGA@AIAGDCEE@CCMAAB@HAHMBgSCB@B@FIHFPBFAJLFDDFLOB[KBC@@QABDBDC@MGMAEBCHEBG@_HCBGNBBPNLLRHAFDLINI@OESAI@CBOA[HWCIEEICCOIMAGCIAIFCBEAQVOFO@GLKDGBICe@CBEHKCCCWGACcOSACCO@C@GCK@OEEGMEAIECM@GCYCKMG@IGQ@ECIECGIIG]MGCEBA@AKIEOIEEIUAQ@CFGBIDEBOF@FCBKDGDIAGLSDE@CLADJFNV@HAJLDBLE@QJMBAFBFHDBFDBFHFDADSPEDCFGDC@EDGBADMH@FEFELQFE@CBGBEDMFADKBGFIBCCE@C@CAEB@DEFDH@DDHEDAFDJBHB@DHABFDDFHFNFD@BCH@EPBDEFEBAHFHDDJJDHBJDBF@BBP@THDFHBHHBD@BBBRJD@BFH@@DJLADLDDFTLVDH@BCB@FDLDBDDBBFCLDBBFF@HFF@BCFBBBDDDBBADGFAF@LBDHAFDHAFDA@NJHV@NEJDDADAH@DBJCL@DBCHFH@DTJFC@AbBHDFBF@FCFDD@FE@ADCLDTC@DABK@KFJ@LDLAPIJDLALFBBHDDDDBHJBF@DGFADHL@FBDFBJCFDFBJVLDHAHD@QFCXSBCHG`@LEB@NIBDCFXELBBBFCLDF@LIFABBHCFEh@FEFDLABBFELAFEDAFGHCNQD@DGDA@CBCEACEB@NCD@AAJG@DBFD@HB@AAE@GCCDGHGBEAABA@CBCLFF@@DFBPDLADBDANEFBDANC@CJATPFEHJLAHDD@DADGFGDA@ADBHEBC@EBCLG@EGMDC@CHMBC@EHGD@HCVBFDF@JCRBNC@AD@LBJ@JCDCD@DCHEFBHCD@BCJCBEDAB@FCBCD@@CDACCAEUCKCCA@CQKEBMCaCIGFSHC@ADA@ACKC@ACCB@CFGAAFEICA@A@CKHI@AFCBCJDFI@GBANCHADCFMFGLEBKBALENO"],"encodeOffsets":[[118956,40847]]},"properties":{"cp":[116.105381,39.937183],"name":"门头沟区","childNum":1}},{"id":"110111","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@NGNAFCLCBE@CBADBB@DGB@@FBBHE@EA@BQE@D@BCCAAGBMBC@C@AB@@CACBCAADKAGB@BDBEJ@BDABD@BBBE@FDAHBAFN@BABFDAF@@GBAB@@BBAJ@BAF@ACHAEA@AD@A@G@@AAB@AC@AAA@@BABC@EK@AD@@BB@@EABA@AADCACDABGB@@HB@BEH@@BD@FFH@BBB@ACBADDDCDDD@@BABBBBCF@@ALBBBDADFBAHLDPBDP@LAACD@ACH@BDFAH@@CLABP@\\BBBDFB@DDBAJFBLJCF@JZ@DBADB@ZABCDMPKBI@CEGDIAG@K@GDEAEBCAEDQCIBGAIGCAEEAACFI@EDCACBCEGBCCGIGECACGGBADACG@ECKS[@AHCBCIIDKKU@GCIH]AMBCAK@KFMBCBCAEHEAMGKYAAHA@@DE@@JCB@E@F@EA@@FAE@@@FA@@EC@@FE@@CE@@DK@@DOA@II@@@MCI@@BKABDCBCE@IA@@CA@@GC@@AA@@HA@CGAAGBAEA@G@EA@DQB@HIAEEO@@JIHBGED@E¿EGB@DCBC@AAEBBFA@DNA@@DIAIDC@AGB@@AG@AICAEA@BI@GABNE@CFA@BHA@@HGA@DKAADCA@GA@@QB@@ECEDEBAE@@EA@ABI@ACA@@GGB@CG@@EC@@FE@@DG@AFA@@JAACDE@@FI@@HE@ANCA@DCB@FKBAB@DKBCBE@CDAKCA@AAEFCAGNACCB@AEEIDACEB@CAG@DA@AGBAAABBBC@@BCAEBKABIBB@CBA@KK@DAA@AAD@CGGB@ESB@CA@@AK@AHGCKN@AE@@CC@@CGB@AAMC@CC[@@KGACGG@BKB@BCC@HABEIABAD@C@BED@@CFDFA@CC@@AFACCODK@SDBADA@AE@BD[BKAQHAAIDIBDCAAFCCC@@EFAFE@EACDCA@AACC@@@@B@@@DAB@BEDB@ADEDADEXGFB@BBCFABD@@DC@@AID@ACBCAADE@DABGEBD@E@@AC@DBC@D@A@AF@HA@FBID@BD@EJBBC@BAC@@BIDCCCBC@BBM@GBEDFB@D@BDBFAAB@H@@BDEBD@A@@DEA@BABBH@DABIL@LGJQFIFGLAABCAABCCGMGACG@@BG@CCG@A@AHIBEABCCCBAC@MBEHGBKEIAOBCCBAMCGCCIEBGAODBFBDKFCH@@EHODEJKJA@KCKG@C@CEEAABCMGKC@ABC@ACCE@BFEV@JDHJHHFAD@JCBDBADADDFADBDKB@DIBCJEFSBAAAEA@MBEDICAD@DBBBHDDBDRN@BIFBB@FDBAB@DFBDDABBBF@@BDBCBB@DBBBEDDDADCBGHE@FHBFCLALAHBFEFBFHF@FE@GFGBW@EEGHE@CBKHE@GDKDGL@FCFBLGDGCCHLDFLTHRGLBdRFJHDPEDB@CFADCFCJIDAB@NJlHB@DDHBPAHB@BJHDFJDAJFFR@VBFJJFFPLJ@BABDFNHH^JJDHJFFDR@JHH@LNZDHDN@FDBJNFFHPFL@HDD@P@DDTBdPBDXHDDLDFGDAf@JDHALCHKP@PERUFBDAJEJBHDNBPJDDFJJFXD\\GPBDAJ@TBPFJ@JMCKBEQGKKOMAAHMDA`GH@FADGFANBNHD@ACACRB@@AD\\LPAEKCCKEBIAEEOJG@IF@bRDBNABG@GBANBDDF@DFHCJB@BHBJAH@"],"encodeOffsets":[[118840,40803]]},"properties":{"cp":[116.139157,39.735535],"name":"房山区","childNum":1}},{"id":"110112","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DDH@DJ@JJB@BLB@GH@@AD@@GJB@AD@BAH@ABFBFGD@ABNDJDDBBGHEHFBABCF@BGD@@CB@@BJBDAFBBAJ@@ADA@GDBCNDB@AHBBCHBNHFLBADDNEBGF@AFJCBFF@@AHA@FD@@BF@@DL@@AF@@CBB@GF@@CD@DGX@NCCEBCJK@KAIOUAKEGIGAMBCJGdKDCBWAO@QAQFQ@UDGPKNEF@@NH@@HHBBQF@BEP@FAJOHIFBJIFCL@BGB@DKRC@ELCD@@BJA@FJ@DANKBEDAJEJADBBB@DCHEFAHBFLB@BDBNGNQDEBMDSAKDCRKFCBCO@DIA@@AB@BCZCDCBGCBGADMGA@BE@GFI@YAIIJMOGDCCA@AEBCJCCICBGEADELB@E@@@CD@@EB@@AB@DCCAFEGA@ED@@CH@@IIBSEBAEA@AKAM@@CC@AECCDCD@BCA@BCAKB@BGCAFAB@HICADCKCDEB@ABDBBATD@AD@JMIADISCBACAADGACBK@SGDCAAEFOAACC@@AU@AIDA@QACQCCABGC@E@ABAABCIE@BECFEECJGNMGABC@EG@CAICAFGDKA@AGCQABCYABCBCA@DIEB@KB@@AI@@AAA@AI@C@@FEFALGB@DCBEDEFIFQFAAEBAA@CE@@AE@@DI@@DC@AFE@CD@DGFDDA@@HD@AHUBC@@CGHAHEJ@PDRANI@IB@BABM@AAGACBG@GAAAC@@DC@@FDDBFEFGA@FI@@EG@EDBNI@ALF@AFJ@@JIBE@MPANKA@DEFM@@CIAAEA@@DC@@CGA@CGAAGCCWA@DQAA@ACKA@JwBUGIDDDKDFFJCDFBNKD@RBBJCBBB@@FEAGB@BIBHJQB@JDPGHDFDCFIZAAJE@@DRBAFEAB@MAIRNFIJ@B@BCBDBCBJDCDHBCDADF@@DHB@BAPCFCBAHBBFB@DG@AFF@BDKF@BD@BAF@FCBBBHDDFCT@TAD@@DF@@EHCBETBGGPA@FNA@ABB@LF@AFBLLLE@AHT@\\VC@BBEHADC@ABJR@HJ@ARY@@JCDH@FBFLCBADD@@BC@ABDBAHD@@JE@DBAFB@ABTCKRBDHABLADH@@DEJDJLANGCNA`CRBFAB@DKAAF@BLBBFH@@FAHKLIEMHFHMHGB]BOH"],"encodeOffsets":[[119394,40978]]},"properties":{"cp":[116.658603,39.902486],"name":"通州区","childNum":1}},{"id":"110113","type":"Feature","geometry":{"type":"MultiPolygon","coordinates":[["@@C@@AIA@ICIG@CCcVDDAFI@JEA@IFC@ILGFWHEFAB@BJD@BDDCFB@BBABvb@GB@BIB@@LJBD[AAB@B@BGAGACB@DDBQD@HC@BD@AJF@EFADLBLm"],["@@MDW@CHC@@DE@@HAA@DE@@BK@@CE@@AC@@EGB@BE@AEIDBEE@AHOFACABEKMGGAADGA@BCADMCA@HCB@BI@ABEACBIA@AA@@DC@AHE@ADABGEGFAHCAICMCBAC@EHEABAG@ABC@@BIA@HC@@BG@@HGAKnD@@ADBBDAL@@A@AXB@@BA@EZD@@DA@ALC@@JA@CJ@ABGA@BKE@@E_CC^ABA@AHC@BEA@BQHguaA@AAAD@DABIIIFKLIFIBUAGDIJGFY@CDC@@BSDEHEBEFDDH@FDD@FBFAD@NJBLD@ALEJ@HCDC`EBCHBDH@DFHADPKD@BCBMACDJVDADJJLCF@NEJYRD`FHN@@FEPBTJBLJJAD@FJBHB@@DJ@@EX@@AF@@FBBV@JLAHABCJHCLB@ABBH@BCJDL@FD@EACL@AGLA@BNAFC@DB@DBFIJ@@FHCACDA@EHEAIDAJDVCBDB@@PF@@BH@J@DEB@@BF@@AD@@ALB@DPB@BLAJB@CDEA@BGFCBIC@@C@EEGD@@EHB@FBB@AB@DI@BLANNB@JFCDDFHDDADD@LLAzzDCCGB@BBB@ACB@BBZG@ALGBB@@@CDAAAB@BBD@DDDACCFADFRH@FB@@HDABFB@BFA@@BBLB@BEFCBB@BHAFDJC@AHA@HB@AIDA@AN@FA@@@BGBND@B@D@DDFBJFB@BCHHFDDFBXBDCHKACHQDCX@@QFKDCAA@EACFEFABE@CJG@GDCDEDADKLABABAIAACC@@CJADCL@BIBCJCDDPCDF@FBBDBFFHADCBCFCAE@CAABAACBECCGDIA@ADEDE@CDEDEAABADBBGB@@DF@FAFE@GG@@G@ADGH@@EL@@BJ@AENQHMLIGKAEEECG@MECLECKFIHEEMC@ACCANE@ACB@ADA@AJA@EDB@EG@FE@GBAM@FCD@DDBAF@CCD@CGAGC@CKKBCADCE@@BEBACGBAC@@AED@@OC@_S@N@@@GA@AHA@ECABBBE@@BF@@DEAADE@CFC@BGA@ADA@BCC@AGIA@AAACJAAAHK@@BMKSA@CCDMAEBIGIA@@E@MPIBDDOFAEcA@EQC@MC@@MBECB@CI@@DE@@DACOBEEUHBDS@EC@KCA@A@ECICE"]],"encodeOffsets":[[[119409,40992]],[[119575,40975]]]},"properties":{"cp":[116.653525,40.128936],"name":"顺义区","childNum":2}},{"id":"110114","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@@G@ACABCICBAAABCGA@IDA@CD@ACACBAA@AEC@@BC@ABEA@CC@MDI@@BI@cKKA@CCABEE@BIB@@AB@AEECSCCJG@IBG@ABEA@FI@@DC@CLJB@HDBBABB@AFBABJDAHAB@CEBI@ABA@BDC@O@@EK@KABCCAADE@BGI@BIE@CHKAGEABCAONIC@DGAEDECYnUGMZBBADOA@FCAADJB@DEB@D@DABBDAB@BIBACDEACCAIFMAGD@DFHCJF@@FB@B^Y@cNA@EEEBGF@LCHANQACGA@OD@A@EEE@GKEMCBMDEBGG@DC@CaEg@AME@CD]CGDEBGCCBADA@CFEAGA@@IBCCCCECGBAMCAAEMCAGKECC@CEACG@CC@GCKBGIEFSOIB@DMDCBEAMFCBCAKBOCEA@CE@KEAD@DABBBAFGHCHDD@HBF@BGAC@AE@CIHBBC@MDA@DFFBAD@DCBCHC@MRGDEHCBGFIBEFAAKBECEFg@EFGDAAEBKJE@KAEBBJGJ@BCB@BFBABABCACBAFFDFHDHDFKHLFBDTEL@DD@DBB@DFBBNDDF@HHEF@DDBCJB@B@FJFFBFLJBDADHAJCJBDBBJDDAD@BLJD@BBD@HFHBD@NCDBH@B@@DF@P@FBDDBFFDCBDFDABDB@BFFADB@DFFADCB@JF@EJ@DADB@@DD@FFD@B@HBEJC@CDA@CBE@EDBFALCBDBHBHFFBBBB@FFF@B@DCFADBBFF@DHD@BBHAFBLKBED@@IJQF@J@DBDHJ@DAJD@DD@BDAFC@ADJFABDD@DFDJ@FBHDF@B@@ABAD@FCFILBNCNDJA@ED@HG@EBAJMHAFBHADB@BF@HF@BCF@DCDBHADDFHFGBEAADDFFBCDABBBDDD@D@BADMCAAEBAJBDB@FFBADBBCFEDIDDJBDCBBFNDF@DFD@DADBF@DFFBBAFBFEHDBBH@BDBBDAFBJ@DDL@BBABDDBDDBB@FAJBJADCBCDEJFJ@DDHC@EBAHF@FDBABDBFBBADCD@DBH@DBXMNJBBABBBAD@DAFDFBAD@@AD@AED@AGHBFDVDPCF@BAFAJCFGD@LG@ADAD@FCJ@DEFCAAC@DAAAEBG@DAGE@INBBBHD@CFBLEEKCADEBA@CDAAC@CACBCCCC@@CLFJ@AFBBHBBAHDDCFBD@LGFDBAFAFBB@BCLCFCJBDBHCL@HHFCAEFGBCF@BABADCJE@AACEACIEAAECABAHABEACDCAABCAIDAFBBADDF@FCBBJE@ADAPABCHC@OHELEH@HBJA@AC@@CA@AGEIC@IBKIIAASFO@EM@EGC_ZQFI@MDEIKCICBIUDCNBDA@ALCCOGBCEG@ACDGFAD_DC@GFIBI@AC@@ICCOGEBEAC@ECG@CCFE"],"encodeOffsets":[[119263,41053]]},"properties":{"cp":[116.235906,40.218085],"name":"昌平区","childNum":1}},{"id":"110115","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@BAH@@CEAAABGDADEBO@AGA@CE@BCDCGADCICDACADA@A@AJIMEJQNBA@FBBEQA@CF@BIYBEJCDCEHGCO@IRAGIJA@AHAFB@EA@AAIDAA@QLCAMCEIDEELCCCJCVHxA@ILBBDB@RB@CXBDDBHHB@DHB@DD@@CB@BFJB@DN@FE@CLBBMNOF@JA@II@BEE@BKJ@AMFCH@@FJ@@EHBFEAECC@ED@@CD@BBHBH@DAHBBBN@BA@AJAJ@BMCQ@QFGBGHG@DD@VABGC@@GB@CCHE@CEA@CK@ACICCDEA@FIADMB@BEC@@@HEF@HCBEB@@BDAB@@CFA@@E@HA@AD@BEAFDE@F@@BICAAFA@BEAB@AEABAA@CBEA@AGA@@K@EBADA@CHC@ENIG@DG@@ACAAFA@@AA@@BSD@DI@E@AAGAA@BCEAAA@BG@@HA@BGEAAFE@AF@AGA@DE@@IMA@BIB@BE@@JG@@NG@AJGB@JK@@CE@BEGAB@CA@BC@AFBCADECADKDF@K@@GUB@AE@@GD@@CB@@ABAGADEC@BEA@BAIA@AIA@AGABAIA@AG@A@AFD@@DAFCABAEABA@@BEA@@GABIB@BIB@DE@@CEA@CEABEC@BGB@@EAACA@GL@DIOABCE@BEOABEC@@EC@@GA@BIIAEBIA@AC@@BG@@FOA@BQ@@BC@DID@BAAA@CB@DCBGEADEAA@BG@@@A@@AE@AA@CG@@GIA@DK@@CY@GABED@BECABEF@@EBEUEAFOAANDB@BA@@JC@ADS@@BM@DBABG@BE@UFA@AD@ACD@@CJ@BEHBJSG@CACOCB@CCABAA@BETDJHFME@@BCA@A@AD@BEB@@BJBABD@ADB@@BB@@BF@BAH@@GD@CBF@DE@KA@BIJOFB@CCEC@CA@GKA@AE@@AI@EESHUDIDQAGDGBGC]BK@@BI@@FAAUBAEIBADE@IBOHEFAFGDAD@FKHAHKH@DCFE@SDMBABBBC@AGE@GJM@OHEBAJCFCDOJADDFED@DFB@DDFABCABHC@BDBHCN@BADDBEFFDBDABE@CLK@DF@DOEA@CDIVHLBNGFBFADADEN@LBLADBNG^DJ@HLVCLJJADGD@BT\\DL@FDHCBABHHBDFDJHDHADFHADBDCD@FEJBDFBBFHDBJAHDJCRBFADBDCH@VJB@FF@DCBED@TJ\\DDGJDDCICBEFBB@AAHSA@DED@BCCADCDADCH@@DNXH@@PBH@FH@DFXBBJL@AATABIT@DKE@DG@KF@@BP@BKLA@BLBB_NBA^AHA@@DrB@DB@@JL@@ADB@RI@@DB@@DA@@BCDE@@CA@ADCFICA@BLD@@ABA@BFAF@AHB@@BAB@DGDBJJEB@@FH@@DJ@@AN@@EH@BDHECAAEBCRDBA@BRKBELBJIVFBHH@@DF@@DBCD@@EDBBAHB@BF@ABC@NF@DD@AHF@BFVABEL@@CF@"],"encodeOffsets":[[119332,40781]]},"properties":{"cp":[116.338033,39.728908],"name":"大兴区","childNum":1}},{"id":"110116","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@A@@BABGBDBFF@DBDA@ADFDBDEJBDEBF@@DDCFBDF@D@BCF@FED@FADDDADCBDD@DDDADDBAFHD@FDCDB@DBDBDBBFFKDCFIJAF@DCB@FLDNAJLH@DHD@LJJAFBLCLDFABAVFL@FCHBLCDCACFGAACBDCCA@CD@@ADAD@DAJBEA@AB@BGEB@CDCF@AADBBCDADDA@BBFBABJB@DJDF@DAHDDAB@DCD@JCN@PHP@AAD@@AHB@DDDAD@BBBPCFCTALBBAD@BCHARDP@HJFBDDD@@LMJCFEBAFKFAFABAFK@IEIAEBCACBADA@EDG@CBEHLLHLFDDDHDBHHJ@FRBFBDHBDLDDJ@DDFH@FHBFJDCFFEDBBFHJDBAJJF@DABA@DDEFB@ADBFD@BDADDB@DBB@DBD@DHDPCJBB@D@DDFADAFAFDDH@JSBABC@GFC@ADE@@DAD@BIDAHIFG@@GA@ADG@@BE@@FQDDD@DEBAF@FGBKBADGGABE@GDEAABE@GJLZHBHHH@DBBDCDAFBDFBDFEJAFDB@BF@BDBDBDATDBBFDDODCDEB@HB@@LCJICGHKDCDADEFCAEBGAEDE@BDKPBLCD@LEDG@CBBDABGFKFADBB@FABCBAJUDG@KHADKDEFANCDCJEFMJCH@FGBIBADEDEHEBIHAHCDCBADMFIFCFC@EH@DCDKF@DBH@DARHFDJDDLFDDT@DHFB@DLBLGDEDAAEDEFCBKLOJEBEDEL@RKLFJANDLIXBDBTADADET@@DDDDFCDBDENALILALKBBJMRAHMHDHDJDDCLDD@FDD@HB@DBLFFCBAHADCBAFBFDD@FDPIF@PCH@HAH@FFBHJAFBLHDFNDJEP@HBDJD@LCJGBAHCHGFAFEF@PC^PDH@HDPED@DDJ@DDD@DFF@FBDCDBB@J@BABEHGB@D@FBHBBDH@FCBRDLLLABBHEFDHABAD@HCDE@CHCJELADBHGLAFDHBDGAEHGBEAEBEFGGMEACADEACIICAAA@KA@BIAGFEGCAECCAILKHC@IDABIACHAHKJEBIJCJBAEFEF@JCIKCICC@GH@NG@CDA@EHEL@DCDBHEF@HEJ@HAAG@GBAFANFFIJ@FABEJIHABELEBEAGDA@ABCFAAKBEDAD@FFDFDBP@BCDC@CDAD@HBHABBHEP@BENALM@AACLCFCH@D@BEHCDEAABEAGACDAHABACACCEAC@@BGBCECCEA@BC@ECBABA@EDABCMCABCAAEKAAGAASECBA@CCBABCBGD@BEE@BCCA@AECCECCE@E@EACDI@GAEEM@OFABEBAFGFCIAABCBCDKDC@GDADKAOBCAC@C@EECBCAC@CAECAG@ABEAEFIAIHMACEKCAGIAMGKAGC@CACC@IE@CE@CE@ABC@A@CACBEECCEFSAAAMDEEA@CAAMG@AACBCHCA@BE@EC@EBCCAADED@BEFADEBCEGDCD@DA@CEEFEECHIACBCDABSICAECCO@EDECCBK@KCACFGQBCAE@@ABAC@CCBCBADB@DFBJ@DDCGFCDA@@R@VGDCCCBEHI@AFCFAJIIEAKC@EACEGC@ECK@EBCAA@CIEAEBCFABCNGKBEDC@@KDCA@BCAGBCFDDGHCDEFAPAABBBDBHCAA@E@@ABC@DCCABEAAFAB@@CD@BEGCHAACGFIBDEF@BEBAAUFKPDF@ECNEBBB@AA@AWII@AGGA@CAAEAGFCABAF@@CACB@MGDA@AD@@HF@@GACB@CEDAAAHAEEKGAGHCHEL@CMRAAIF@CSA@@CC@AIP@@E@AZHBKNDD@BAA@JA@GD@AEH@@CJ@E@@CHIACJ@@ABB@CA@@BSIKOEBQUAAB@EGA@EG@ByyKB@KCCCBGCCEDCIEA@MMKB@ACJA@@BAA@EGA@FC@FH@F@DD@AJEDAHB@CF@DIAKB@AOA@CKA@BC@@BE@@AA@CFI@G@@AE@@OA@ACUDICCBBJGF@FCBBDGD@EI@EJCAA@@CEDMB@AKBBHK@BD@FECK@ICADG@AA@BKAGDDIBABGIKU@AA@EE@@BW@@FE@@BIBGAG@KFGF@PGDADOBCB@BIFAAEDE@CCABEACBBJADBBCDBDAFGBABDBBFFBDJFBBD@BIFCDABABE@ADEHBFEDGGK@GDCAIAEDKDADA@EAEBABECKHC@EACDGCABGAAABEI@KE@DD@DDADBD@DBDCB@DABCFDBFLKFEA@DGCAAMA@JHFCBH@FABBCBD@BBEDCFI@EDC@CB@BKHC@EHIDEBABE@ODUCECGABHC@BFC@@BC@ABAA"],"encodeOffsets":[[119081,41362]]},"properties":{"cp":[116.637122,40.324272],"name":"怀柔区","childNum":1}},{"id":"110117","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@@GDEH@DDFADBLABEFABCDIF@DAAEBA@EDKBEHGACDAL@DAHABAAEAACEDEAE@CFGAKVKF@DEHE@EBA@CAA@CAA@EDCBEPBBCJBDBF@DFBA@FF@@@H@FBDFFBFG@GDI@ODEAEDC@CFECSFGDK@CF@FEBEHBLFL@DBFCDBDCFAD@HEJBDCBA@CBCKAK@CCE@B@AADCAIF@@CBCD@BBD@DCHA@AEAEBICBB@BABAACE@CBA@ABCF@B@@AAAACBEH@BDDBDA@AJHDCD@FEFAAACA@CGBIGICFCAAO@ABCACDDGAACBEFC@E@AACA@AAA@BAB@CE@BDD@CBBBCB@CCA@AB@@AAAEDA@G@C@ACDA@CJI@EFGAAC@AAIGCCH@B@CCCAAAN@AGACADC@EICAEAIBCAMA@FCBC@EHIEGBABCAIC@IAAAECEKG@EA@CBC@EDG@CACEC@AEEABIEEGBADCFMDIA@DC@@BGBGGGBGCCGMGAGGCBCACKDM@@KFC@AAADAGACCC@GE@EJ@ACCC@EIACCABBDIBCDAHCH@BBBIF@A@AGEBCHC@ACA@EGC@BIB@BC@ABEBID@AEBIDHEGKQGI@GCG@MDEFKHCCEDOAEDBBECDFEBEAAAW@@KC@AGC@@HQAC@BGMABAE@ACKB@CEB@ID@ACCA@AMAABICKMKGDII@BGE@AFEA@AG@@DE@@CUA@FOHMDO@MCCDBB@HD@@BA@CHGAAHC@@PC@BF@@BDHABDFA@AF@CDDBLADLD@BHDHC@DDE@ABCCC@EDN@AB@HEFH@@FCA@FIB@BCB@BDA@BMFDBBDD@FNGFEJDLKFFD@NDHFFBFHLKJGNMRBFI@@AK@@FG@CH@B@HH@@HEFEBE@@CA@AHCAABBBCFCF@DCFCF@BJBHCDDAFBDABBB@DBFEDADCBDFJ@BBB@DBBDJBDAFEF@LJ@BFBBBJHBDBFGFEDOCEFGDEDADJJB@HHDB@DJFFBDDAFHFH@JFP@ABD@CDDBBABDBCBBF@D@BDD@@HC@@DBBDDDBBFFBAHCDAD@JFBDLFBBHDBDDDFLBJADBH@BDJ@F@BBFAFGHBD@FHFDN@@DHFD@NDFDBDHBBFFDHBDCNCBCDADBFADBLBFFF@DDRDBDD@DF@DNB@FDC@BB@ADB@VEDBBDDAJDF@DBABH@RAH@NEN@NHHCD@"],"encodeOffsets":[[120038,41345]]},"properties":{"cp":[117.112335,40.144783],"name":"平谷区","childNum":1}},{"id":"110118","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@DENABAAIAABGAG@ACDC@BEF@HGL@bEHA@AEC@ALYCEE@@AFK@CJ@HEBAJABE@IBCRKH@BCHA@CFAHGCI@@FABCPABCDAPBFCZIFCNALDBAP@HEHFBFJBFDVAFDL@FALBHCJFJAPFBBNBFBF@FBBABEFC@ABCJBF@H@HCF@FCH@NDHCLADDD@DDFAD@PKHBBFBBDCPBHCLBFAD@FEN@BC^KDGNG^FFDD@NIJKJCBAACBAFAJEvCF@DAFBLDJBFDD@BBAFDDFDBDdBJDFBHFNALFFDJADBF@ZFHAJBFCJ@NGHFFC@EDEH@DBL@@AJ@PEHBDBD@DBJBBDFCVEHEBADANIJG@IGAOCFKEECCBC@EAAS@IEADM@EJBHGBAFGD@AE@EDDB@BA@Q@IABANC@AEBCCDIA@ACBEAIGCBC@AMBACCAO@BDEBFBGFBDADBBCBC@GEAKHI@IAAGCEKCA@CCEDGFCBGFCAEFQFAHA@GQMGBCBCACDG@GFCCAEOEEEAEC@ABE@CDG@CD@DE@ABBBE@@DEBAFG@KD@BE@CDADCCCBE@MECCIAGFMC@BABE@AAC@IGCAACGCACCBGCMAOIE@CBIAGCKIECC@CCEA@CBA@C@ACAAAJGDIBGFEFKFCAGE@IDOEEFIDCAACE@GEIBMDICAID@KM@GHCJ@VYCE@EDEHEJAAGA@CCFKHCH@FELC@ILEJAB@ECEGMIAEGAEICBCEKEBEBA@EDGCEBEFEBGG@AGOGAE@AACBAEGC@GDMGM@MFG@QBG@BACAE@ICCBACCAUFA@BCA@@ACD@EMA@CCEC@ACQCCCE@EEKACAEBCACBADMDCDGAECAEGAACECMCC@GE@CM@ECEGC@GAEHEBAAE@I@ACG@CAIBKACECCCAAGEACKEA@IBCDCBGEAAECACCAA@CD@@GC@ACC@E@AAADACABCADCC@BAO@IEG@GEBECCEAIE@CCAGGA@IIBCFCHCFEPDJEDCCIIGAAEA@AKIE@EFM@ACEACAG@CCGBEECAAA@ECEODCCIDADAJK@CDIB@DD@BDJBABABKBCLCBCFCD@HIH@DAFEBEFBD@FBBCDEL@RW@CDGRBDGLCDWAEACCGEDG@AEAAICE@C@C@AMCHA@A@@EBM@@BCBBJA@@GGB@BIDECGB@AAAEDAFA@AK@AB@AEA@AECB@GA@@EQGCEEBDDCBCCC@AAA@BBCB@D@@AAKH@BYHAAA@BDA@AAA@DHCBFHB@FHA@BBRVFALPTJ@AB@@DK@BDGJ@DF@I@@DG@BFC@@HIBB@ABC@MCALYG@B@FO@BJD@@DB@DTE@BJQBDNK@GFGDBHLHFFGBBBCBDFA@BD@HE@@GC@@BCBNHA@BD@DE@ABDBHEFBBB@DHBBHJ@XJ@BBBA@AAMFFDE@OCELBVABAFE@CFJAHEBDGBHDAFC@@DA@EBBBAFDBCDD@BA@@@FBBGDCAAABAOBEBCFGDCHECADBHADB@CD@LD@FCLAMHADEBADBFJF@DBBAD@FDL@FHDDFFBD@BLJFIJEBED@BGJAFDDCDCBEBKDQ@@@CBEDDHCCI@EA@CCAABABDFD@AB@BF@DBRAEHBDLDL@DAFDFCP@DDBFJDATCBADBDGJFDEFFF@DCBC@CDFHADCFEBAFC@CFBBDDFAD@@FAFB@GDADBD@BNHBB@DFBCFBNBBETDFFDAFBD@D@BAD@BDFF@@DJFD@BD@DHDLBNHJBBHLDDFNBJGJBFEFBBAH@DBBF@DBDADFD@F@DBDADBPCLCB@HCDCLADADBBDJHEBEFABAPEN@FFHBJ@DCFBF@F@DDDFFD@BDBADF@AFC@AHADABDDB@DATFBBBHLBBFDBBANDADCB@FABABFDD@@AFBDDDFHA@AD@FBDDDB"],"encodeOffsets":[[119693,41781]]},"properties":{"cp":[116.843352,40.377362],"name":"密云区","childNum":1}},{"id":"110119","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@F@FCHBFADBFEBCDCLCHGJDDI@KA@@GFADCPCCCAECABSACACACE@@ACABEFICEEAACBEDCACCAG@GGGACKEG@AACBCFEF@BAFBHCF@BAHHBCNABAD@AEDEFA@CCCRC@EF@@AH@BC@@BHH@JEBGJC@ABC@CF@BCD@HED@BATA@ICGECEBCBEBCCC@A@IAODGC@CAC@CAA@CCABCACC@AEBCA@FECCB@BA@CIEBICAGIAECAEFDEICAEEGG@CE@CCIKCACCGEAQA@EGIAGGCCCECGKKKFGDAH@FCB@BCDADBFAJBJFL@BEBABELEBEFADENI@KC@CCEAGIO@QCGBADC@ABKASBEDODAA@ABCCC@CGA@BC@BBO@OGM@IDC@CDA@CBGCCBE@IC@CIABAEAAAB@CCCBADCABBE@CD@DFAAHA@@BFBIACBC@CB@BC@@DDBCDDABBEHBDCDKDGAEDK@UEABEBKCKDEAIBKIC@CGG@IKMBIAAA@EDA@CBEJIDELCEEAAACAC@CCACD@EGCBECABCCC@CCCDABCCCBC@EFC@EDE@A@CCEEACD@CE@FAACFIACECBCB@AC@CEECAHABA@AB@ACBE@CBCAABAAAMIWNCAG@CAC@EFICBACA@EGEAB@FGDCCI@IECFADCDIBIAEBA@CAACCCBAAAK@CCI@EACBAAACG@AAGCEFEAABEACEE@CACBC@CEE@MCAEDAACCIJCFCDEAABCEA@ECAIAABBFDBCNABC@C@CCAABADCEACEBCFBHAGECEBCAGDC@CDE@AGEE@@AEAEBEAGBINAB@FGHC@@FIBMCMDKAEJEDC@AB@B@@G@GCEAI@CCACCCBAIEBCD@BEACA@ACCAEACBI@CGMAE@AFADEH@JC@AFCBEHABEAGBAAC@CGE@AECAEBCDA@E@EEA@AAEAGEGACADABKAEFCF@DAB@DCD@FIGAA@C@EEC@@CA@BC@CFIE@@IDABCEE@CCAEBAEA@AAC@CECBCFC@CJBBID@FGD@DCFBBADGA@FABBB@FGHAFA@@BDDBB@DBDMDAHEBADEBEA@BGH@BHDBDCDCBAFAFFFGLAHAB@DMDCDaCCDKA@BC@@DIA@DC@@BGC@@EBICCD@BD@@DCCE@ABF@@BG@@@H@GBH@@DE@@BF@@BG@HB@HA@@E@JI@@DMA@AC@CBA@@DEAAHE@AHC@@BB@FBAFO@EJCBGF@ACFA@@AC@CDEA@@BBC@@BBB@BFB@@ADBBADFACFB@CFBBD@FC@BA@ADDFD@@BABGCE@EF@HDHDBFF@HADDHHF@FGDGAKJGBgAAAAEMRJPADFBBHJPJJD@@FEFBDDBHAJDBBBDHJJBDHPJLFJ@HELBLCF@LDDHAJDF@FBDDPDHVFJBFDFCLADBH@HBDBBFJADBLADBFAHFDHDDBDJFHHDBBDDDDAR@RGNBHCNAHCDBJ@HCH@HC@CCENB@ADIDMHIBIFABBL@DBFABD@D@BRABHDDD@FJHF@BCBBBFBHHB@DDBCDDBC@ECEDCHFBBBARDLHPBJFL@HBBBBLDDTJFFTFB@BEF@^BFBBBCFONALABDDLDDDJBBDFFFJB@ABFFD@LADANCTAFB@FFLBLFH@FDH@JCDBDHFDJ@DFF@DJDADLJBHLDPL@DAD@FH@DDFCJFDD@JFHVLADEBBF@F@B@DJH@JAFJDDFHBDFLCDCF@@CDABCF@BEDCFA@KBCFE@ED@DCHFD@FAHBHIJELAHGDB@FCF@FAFJLHDD@DBL@HBFAL@BAJBNELBFDNCFBR@FBBDH@HDDDJAHDDAHDNEDQL@FCNBLAFDH@REHFHBHF"],"encodeOffsets":[[119261,41752]]},"properties":{"cp":[115.985006,40.465325],"name":"延庆区","childNum":1}}],"UTF8Encoding":true};
return res;
  }

  const mapChart = echarts.init(props)
  mapChart.setOption(option)
}

export default initmap