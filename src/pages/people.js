import React from 'react'
import BaseContainer from '../components/base-container'
import { Box, Divider, Grid, Link, Typography } from '@material-ui/core'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import WingContainer from '../components/people/wing-container'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const peopleArray = [
  {
    name: 'Raveen Prabhu',
    title: 'President',
  },
  {
    name: 'Dao Minh Hai',
    title: 'Vice President of Student Life',
  },
  {
    name: 'Arnav Gupta',
    title: 'Vice President of Student Development',
  },
  {
    name: 'Roy Chua',
    title: 'Vice President of Internal Relations',
  },
  {
    name: 'Abhishek Jain',
    title: 'Vice President of External Relations',
  },
  {
    name: 'Chen Hsiao Ting',
    title: 'General Secretary',
  },
  {
    name: 'Jenny Jian Jie',
    title: 'Deputy General Secretary',
  },
  {
    name: 'Tan Kian Lin',
    title: 'Finance Secretary',
  },
  {
    name: 'Sophie Ng',
    title: 'Deputy Finance Secretary',
  },
  {
    name: 'Rishabh Anand',
    title: 'Tech Lead',
  },
  {
    name: 'Megan Wee',
    title: 'Deputy Tech Lead',
  },
  {
    name: 'Tricia Goh',
    title: 'Director of FOP',
  },
  {
    name: 'Summer Thia',
    title: 'Deputy Director of FOP',
  },
  {
    name: 'Andrea Loh',
    title: 'Deputy Director of FOP',
  },
  {
    name: 'Merrick Neo',
    title: 'Director of Student Relations',
  },
  {
    name: 'Low Zan Hao',
    title: 'Deputy Director of Student Relations',
  },
  {
    name: 'David Limantara',
    title: 'Director of Academic Liaison',
  },
  {
    name: 'Joel Toh',
    title: 'Deputy Director of Academic Liaison',
  },
  {
    name: 'Cheang Xue Ting',
    title: 'Director of Community Service',
  },
  {
    name: 'Wei Yangken',
    title: 'Deputy Director of Community Service',
  },
  {
    name: 'Xiong Jingya',
    title: 'Director of Welfare',
  },
  {
    name: 'Bryan Ong',
    title: 'Deputy Director of Welfare',
  },
  {
    name: 'L Kaushik Rangaraj',
    title: 'Director of Sports',
  },
  {
    name: 'Denise Lam',
    title: 'Deputy Director of Sports',
  },
  {
    name: 'Xiang Qingyi',
    title: 'Director of Publicity',
  },
  {
    name: 'Alyssa Savier',
    title: 'Deputy Director of Publicity (Graphics & Content)',
  },
  {
    name: 'Yap Teng Chiong',
    title: 'Deputy Director of Publicity (Photo & Video)',
  },
  {
    name: 'Lo Zhao Wei',
    title: 'Director of Marketing',
  },
  {
    name: 'Lin Jiayong',
    title: 'Deputy Director of Marketing (Sponsorship)',
  },
  {
    name: 'Shen Yu Chen',
    title: 'Deputy Director of Marketing (Merchandise)',
  },
];

function PeoplePage() {
  const { allFile } = useStaticQuery(graphql`{
  allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "peopleImages"}}
  ) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(
            quality: 100
            layout: FULL_WIDTH
            placeholder: BLURRED
          )
        }
      }
    }
  }
}
`);

  const images = Object.assign({}, ...allFile.edges.map(edge => ({ [edge.node.name]: getImage(edge.node) })));

  peopleArray.forEach((person) => {
    const keyPrefix = person.name.replace(/ /g, '').replace(/,/g, '');
    person.image = images[keyPrefix + '1'];
    person.imageFun = images[keyPrefix + '2'];
  });

  const people = Object.assign({}, ...peopleArray.map(person => ({ [person.name.replace(/ /g, '').replace(/,/g, '')]: person })));
  const president = people.RaveenPrabhu;
  const studentLifeHead = people.DaoMinhHai;
  const studentDevelopmentHead = people.ArnavGupta;
  const internalRelationsHead = people.RoyChua;
  const externalRelationsHead = people.AbhishekJain;

  const presidentialWing = {
    name: 'Presidential Wing',
    head: president,
    cells: [
      {
        name: 'Presidential Cell',
        members: [
          president,
          studentLifeHead,
          studentDevelopmentHead,
          internalRelationsHead,
          externalRelationsHead,
        ],
      },
      {
        name: 'Secretariat Cell',
        members: [
          people.ChenHsiaoTing,
          people.JennyJianJie,
        ],
      },
      {
        name: 'Tech Leads',
        members: [
          people.RishabhAnand,
          people.MeganWee,
        ]
      },
      {
        name: 'Finance Cell',
        members: [
          people.TanKianLin,
          people.SophieNg,
        ],
      }
    ]
  }

  const externalRelationsWing = {
    name: 'External Relations Wing',
    head: people.AbhishekJain,
    cells: [
      {
        name: 'Publicity Cell',
        members: [
          people.XiangQingyi,
          people.AlyssaSavier,
          people.YapTengChiong,
        ],
      },
      {
        name: 'Marketing Cell',
        members: [
          people.LoZhaoWei,
          people.LinJiayong,
          people.ShenYuChen,
        ],
      },
    ]
  }

  const studentDevelopmentWing = {
    name: 'Student Development Wing',
    head: people.ArnavGupta,
    cells: [
      {
        name: 'Academic Liaison Cell',
        members: [
          people.DavidLimantara,
          people.JoelToh,
        ],
      },
      {
        name: 'Community Service Cell',
        members: [
          people.CheangXueTing,
          people.WeiYangken,
        ],
      },
    ]
  }

  const studentLifeWing = {
    name: 'Student Life Wing',
    head: people.DaoMinhHai,
    cells: [
      {
        name: 'FOP Cell',
        members: [
          people.TriciaGoh,
          people.SummerThia,
          people.AndreaLoh,
        ],
      },
      {
        name: 'Student Relations Cell',
        members: [
          people.MerrickNeo,
          people.LowZanHao,
        ],
      },
    ]
  }

  const internalRelationsWing = {
    name: 'Internal Relations Wing',
    head: people.RoyChua,
    cells: [
      {
        name: 'Welfare Cell',
        members: [
          people.XiongJingya,
          people.BryanOng,
        ],
      },
      {
        name: 'Sports Cell',
        members: [
          people.LKaushikRangaraj,
          people.DeniseLam,
        ],
      },
    ]
  }

  const wingMain = [
    presidentialWing
  ];

  const wings = [
    externalRelationsWing,
    studentLifeWing,
    internalRelationsWing,
    studentDevelopmentWing,
  ];

  wingMain.forEach((wing) => {
    const keyPrefix = wing.name.replace(/ /g, '');
    wing.image = images[keyPrefix + '1'];
    wing.imageFun = images[keyPrefix + '2'];
  });

  wings.forEach((wing) => {
    const keyPrefix = wing.name.replace(/ /g, '');
    wing.image = images[keyPrefix + '1'];
    wing.imageFun = images[keyPrefix + '2'];
  });

  const props = {
    wings: wings,
  };

  const propsMain = {
    wingMain: wingMain,
  };

  return (
    <BaseContainer title='People'>
      <Box mb={4}>
        <Typography variant="h3">
          People
        </Typography>
        <Typography variant="h4">
          24th Management Committee
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="center" justify="center">
        {
          propsMain.wingMain.map((wing) =>
            <Grid item xs={12} md={6}>
              <a aria-label={`Photo of ${wing.name}`} href={`#${wing.name}`}><GatsbyImage image={wing.image} style={{borderRadius: '8px'}} /></a>
              <Box mt={2}>
                <Typography variant="subtitle1">
                  <Link component={GatsbyLink} href={`#${wing.name}`}>{wing.name}</Link>
                </Typography>
              </Box>
            </Grid>
          )
        }
      </Grid>
      <Grid container spacing={4}>
        {
          props.wings.map((wing) =>
            <Grid item xs={12} md={6}>
              <a aria-label={`Photo of ${wing.name}`} href={`#${wing.name}`}><GatsbyImage image={wing.image} style={{borderRadius: '8px'}} /></a>
              <Box mt={2}>
                <Typography variant="subtitle1">
                  <Link component={GatsbyLink} href={`#${wing.name}`}>{wing.name}</Link>
                </Typography>
              </Box>
            </Grid>
          )
        }
      </Grid>
      <Box mt={8} mb={4}>
        <Divider></Divider>
      </Box>

      {propMain.wingMain.map((wing) =>
        <Box mt={8}>
          <WingContainer {...wing} />
        </Box>
      )}

      {props.wings.map((wing) =>
        <Box mt={8}>
          <WingContainer {...wing} />
        </Box>
      )}

    </BaseContainer>
  );
}

export default PeoplePage
