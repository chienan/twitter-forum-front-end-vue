<template>
  <div class="d-flex">
    <div>
      <NavBar />
    </div>

    <div>
      <MainTweets :tweets="tweets" />
    </div>

    <div>
      <FollowRecommend />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import MainTweets from "../components/MainTweets";
import FollowRecommend from "../components/FollowRecommend";
// import tweetsAPI from '../apis/tweets'

const dummyData = {
  tweets: [
    {
      id: 1,
      UserId: 1,
      description:
        "Fuga nisi sed illum nihil. Architecto cupiditate dolorem perspiciatis commodi laboriosam deserunt. Commodi maxime maiores ipsam repudiandae. Earum quam voluptatibus et sint est modi aliquid. Eos rerum nulla sed consequatur aliquam.\n \rCorrupti ut voluptas quis. Cupiditate quo quis alias delectus. Aut sunt et nam corrupti labore sint autem quam.\n \rVelit quod fugiat rem reiciendis est. Voluptate hic architecto velit veritatis minima deserunt quibusdam. In excepturi laborum nostrum consequatur aperiam necessitatibus. Iure laborum eum beatae qui minus ut vel ea non.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 11,
      UserId: 1,
      description: "id",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 21,
      UserId: 1,
      description:
        "Est autem dignissimos mollitia ad dolore ut repellendus fugiat.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 31,
      UserId: 1,
      description:
        "Ut quis ab. Ea et saepe eaque deserunt voluptas praesentium. Eum nostrum et delectus fugit id. Officiis voluptas rerum sit et sapiente optio minima. Saepe est mollitia soluta porro placeat architecto. Accusantium porro et officia itaque inventore placeat.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 41,
      UserId: 1,
      description:
        "Omnis voluptate ipsam eveniet accusamus. Ab qui culpa veritatis aut dignissimos beatae eos omnis voluptatem. Corporis similique in in id eos ab aut quas sed. Distinctio itaque et ut magni eos voluptatem. Rerum fuga nisi ipsa saepe.\n \rAut neque aut culpa ad quod necessitatibus veniam. Soluta in velit dolore quisquam autem provident labore in quidem. Earum harum et est iusto sit sit optio ipsum sint. Doloremque sit repellat. Qui nisi sit hic error provident natus.\n \rIpsa ipsam voluptatem laborum neque. Quasi adipisci odio in eum doloribus unde quis. Explicabo consectetur debitis.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 51,
      UserId: 1,
      description: "laboriosam soluta voluptatem",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 61,
      UserId: 1,
      description: "aut suscipit sequi",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 71,
      UserId: 1,
      description:
        "Aut aspernatur alias ipsum aperiam eum eligendi dolore provident. Quasi fugit repellat rerum dolor vel unde laborum qui delectus. Quam fuga rerum assumenda omnis natus quia id facilis tempore.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 81,
      UserId: 1,
      description: "ut",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 91,
      UserId: 1,
      description: "quia",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 1,
        account: "user1",
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$/NUimop5x5YaUKihKdvHqO7YGednpN9sGAG1huUKps2cjaZJ0uEvC",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "ut quos recusandae",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 101,
      UserId: 2,
      description:
        "Deserunt accusantium numquam. Omnis sequi animi. Placeat doloribus quod quia possimus illo animi. Ullam occaecati qui et maiores provident et sapiente occaecati. Sit reprehenderit quia.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 111,
      UserId: 2,
      description: "quasi",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 121,
      UserId: 2,
      description: "deleniti aspernatur ratione",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 131,
      UserId: 2,
      description: "modi soluta nihil",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 141,
      UserId: 2,
      description:
        "Molestiae aperiam doloribus qui doloremque. Neque dignissimos alias repellendus saepe vitae quos accusamus nostrum soluta. Odit neque consectetur itaque suscipit alias. Labore numquam dolorum laudantium rerum eos optio.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 151,
      UserId: 2,
      description: "sed",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 161,
      UserId: 2,
      description:
        "Qui quidem quia maiores et nam repudiandae hic. Molestiae maxime animi. Itaque sunt molestiae a id et at sed et.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 171,
      UserId: 2,
      description: "Similique ex similique assumenda quod qui et in.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 181,
      UserId: 2,
      description:
        "Voluptas voluptatum aperiam dolorem reiciendis ut doloribus voluptatum laborum. Reprehenderit nihil minima repudiandae molestias quia sint sit. Enim temporibus aut sed cumque. Nostrum ut velit nesciunt. Officiis maiores esse sequi maxime iusto amet sed.\n \rTotam iste ipsam doloremque qui et. Minus enim et. Dolorem reprehenderit ducimus et. Voluptatem a a quos quidem perferendis consequuntur aperiam modi aut. Nihil deserunt aut qui minus voluptate et sint eaque.\n \rVelit vel repellat labore sunt quas adipisci quia nulla ea. Quia magni perferendis velit quia dolores reprehenderit sunt. Qui doloribus esse. Possimus vel deserunt sit.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 191,
      UserId: 2,
      description:
        "Ut libero earum doloremque explicabo adipisci maiores. Rerum fugit nisi ea inventore quidem. Aut eius non praesentium quae debitis necessitatibus quo illum sit. Et occaecati consequatur aut optio voluptatem accusamus. Quo pariatur quo eum consequuntur dolorem fugit.\n \rOmnis quia voluptatem laborum nihil molestiae quisquam aliquam. Iusto perspiciatis explicabo. Fugit voluptas vero quod cupiditate.\n \rNemo qui odio illo saepe repellat. Dicta perspiciatis culpa eius rerum molestiae nam consequatur et. Et rem illum non hic deleniti repudiandae cumque quae.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 2,
        account: "user2",
        name: "user2",
        email: "user2@example.com",
        password:
          "$2a$10$yfy3JdwdyHWja0MclwYMEOgvjfYIA6eTlH.emlk9/V4ucReX6Mmo2",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Dolorem odit molestias velit sapiente vitae reiciendis doloribus. Reprehenderit ea occaecati. Sit architecto atque soluta accusantium deleniti. Rerum voluptas non quis voluptatem dolorem cupiditate autem dicta. Ipsa voluptatem asperiores omnis ipsam earum et sunt suscipit. Sed quos voluptas rem blanditiis illum saepe voluptatem culpa optio.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 201,
      UserId: 3,
      description:
        "Adipisci saepe et et consequatur consequatur omnis architecto labore. Eum doloremque ipsam quos in omnis aut qui tempora. Quidem nemo exercitationem ipsum ab laudantium tempora sunt. Magni optio in iste ipsum.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 211,
      UserId: 3,
      description:
        "Debitis magni non et amet velit ipsam saepe fugiat officia. Natus placeat quia eos dolor non ut qui cum ut. Ut perferendis natus amet itaque ullam molestias. Magni aut saepe aliquam.\n \rUt sint blanditiis veniam amet. Consectetur numquam culpa sed non delectus est. Tempore nemo odit.\n \rAut sed nemo et veniam voluptatum unde impedit molestias odit. Dolores recusandae dolor eum id est suscipit illum in voluptates. Quia dolorem ut expedita hic voluptatem unde ut officia. Nihil sed sunt consequatur.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 221,
      UserId: 3,
      description:
        "Et quod repellat quo qui voluptatem aut qui. Voluptate minima sint sit voluptatem id. Eius dolore ut.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 231,
      UserId: 3,
      description: "Ut omnis aut et dolores sequi reiciendis.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 241,
      UserId: 3,
      description:
        "Sunt nobis adipisci. Corrupti doloremque repellat voluptatem error et odit facilis tempore. Ex corporis quisquam eum velit aspernatur. Aspernatur rerum quo nobis dolorem qui maxime accusantium optio omnis.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 251,
      UserId: 3,
      description: "perferendis qui quo",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 261,
      UserId: 3,
      description:
        "Totam eveniet tempora voluptas quibusdam non alias. Aut cupiditate suscipit similique voluptates ut corporis omnis velit. Ab corrupti error.\n \rFacilis magnam cupiditate sapiente aliquid recusandae explicabo dolorem. Enim dolor laudantium aut similique aspernatur. Ullam incidunt facere ipsum id ratione similique. Non molestiae est sint ab expedita nemo.\n \rVoluptates eos omnis quia aspernatur. Fugiat id atque et tenetur quia expedita illum ipsa. Nisi omnis et officiis doloremque culpa. Nesciunt quia dolores autem dignissimos impedit. Molestiae illo sunt voluptatem consequuntur. Commodi aliquid dolores omnis ratione aut nemo ut exercitationem natus.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 271,
      UserId: 3,
      description:
        "Libero dolor eaque vel et.\nVoluptas et rerum nesciunt sunt maiores id modi.\nEos quis quibusdam laudantium.\nSit ducimus blanditiis eos velit optio sit molestiae temporibus.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 281,
      UserId: 3,
      description: "Sit eum officia.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 291,
      UserId: 3,
      description:
        "Velit velit autem aut dolorem molestiae. Atque aut quae non cupiditate et rerum rerum esse. Architecto exercitationem consequuntur laborum harum consectetur. Explicabo sed culpa numquam velit ut numquam ut repellendus. Est et corporis delectus nam aut. Doloribus quisquam veniam quam suscipit provident ut voluptas quia.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 3,
        account: "user3",
        name: "user3",
        email: "user3@example.com",
        password:
          "$2a$10$a1UqimKDYcWGIzGi.0LwoeIF2aH2986cmfeApVFx8XGIkR.fjrIem",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction:
          "Officia et et est quis sint aut. Error ut beatae veritatis rerum at assumenda vel illum. Voluptatibus tempore quo ad eum modi sapiente omnis ipsa et.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:39.000Z",
        updatedAt: "2020-12-15T13:49:39.000Z"
      }
    },
    {
      id: 301,
      UserId: 4,
      description:
        "Enim natus modi doloremque illo voluptas et aliquid aliquid. Voluptas tempora et possimus autem laboriosam eaque quae nihil. Ea dolorem a fuga ut sit exercitationem doloremque.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 311,
      UserId: 4,
      description:
        "Non dicta provident est quam sunt eius a. Fuga iure sint dolor quidem. Rerum quidem et sequi reprehenderit omnis reiciendis. Minima ratione autem cum qui ut rerum.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 321,
      UserId: 4,
      description:
        "Et totam molestiae quod consectetur at sequi itaque commodi laudantium. Eos ea quibusdam. Ut doloremque architecto vitae. Id debitis autem. Sint quod voluptatem omnis numquam assumenda.\n \rOfficia voluptate est doloremque. Enim iure nisi et ad est non aspernatur voluptatem tempora. Laborum nesciunt esse et qui asperiores perferendis aut quia.\n \rDoloremque consectetur ab vel eum et laboriosam at. Aut distinctio necessitatibus officiis. Voluptatem ratione perferendis soluta eos autem ea itaque qui consectetur.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 331,
      UserId: 4,
      description:
        "Voluptatem accusamus temporibus nesciunt ipsa praesentium id. Consectetur enim aut dolor provident eius ea.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 341,
      UserId: 4,
      description: "Id et vel facere nisi ipsum enim inventore accusantium.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 351,
      UserId: 4,
      description:
        "Magni porro incidunt nihil autem ipsa quaerat voluptas eius. Accusantium natus in temporibus praesentium ut minima quaerat dolorem. Animi dignissimos sed. Sed saepe et fugiat non quo omnis sunt.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 361,
      UserId: 4,
      description: "quod architecto esse",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 371,
      UserId: 4,
      description:
        "Sed quia ut repellendus est non sit. Qui velit et non eaque. Porro fuga ullam ea sed. Eum ratione aspernatur vel exercitationem voluptas occaecati.\n \rDelectus eum aut. Libero velit est accusantium. Provident excepturi magnam libero. Corporis est et. Ut quibusdam doloribus.\n \rEnim in dolorum quidem. Tenetur eum nihil eius rem sed voluptates deserunt. Corrupti quae ut tempora dicta in est est. Tenetur mollitia deleniti accusamus velit nam.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 381,
      UserId: 4,
      description:
        "Et voluptatem quasi.\nExercitationem itaque nobis eum qui voluptas veniam sint.\nEt consequatur atque tempore asperiores maiores dolorem.\nEnim rem nostrum ut repellat culpa modi et.\nVeritatis aut facilis.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 391,
      UserId: 4,
      description: "magni provident velit",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 4,
        account: "user4",
        name: "user4",
        email: "user4@example.com",
        password:
          "$2a$10$bby48cPk6Xq5ml2ecr6FMuYFaZ9weZcaE7GSn1pirXDCvWyEjMT56",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "quia mollitia quidem",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 401,
      UserId: 5,
      description: "Illo quisquam unde quod rem est suscipit dignissimos.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 411,
      UserId: 5,
      description:
        "Eligendi eligendi tempora et. Modi recusandae provident ad. Quod explicabo rerum omnis aperiam sit quia cupiditate. Enim debitis est autem reiciendis voluptatem. Quos id ea repellat officiis qui. Aut error tempore tempora incidunt corporis provident.\n \rUllam numquam laborum. Qui aut et illum doloremque quidem. Velit sequi animi debitis rerum. Ipsam qui voluptates ex in dignissimos aliquid. Non natus nostrum. Est ut ad distinctio sit odio possimus.\n \rDignissimos sit minus qui. Doloremque quia eum. Laboriosam sint recusandae. Vero necessitatibus soluta ducimus porro soluta sunt dolore sint. Voluptatem sequi soluta quia modi.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 421,
      UserId: 5,
      description: "quaerat sed architecto",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 431,
      UserId: 5,
      description:
        "Doloremque eaque consequuntur suscipit totam.\nNulla et consequatur accusamus.\nNatus ut dolor in molestiae eos qui aliquam non.\nConsectetur rerum veritatis esse.\nQuaerat placeat sunt tempora iste architecto ut nobis at at.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 441,
      UserId: 5,
      description:
        "Dolore quae enim sequi quis voluptate. Reprehenderit repudiandae rerum. Facere alias est eaque eaque fuga eum. Modi dolorum incidunt. Cumque nihil explicabo. Et nobis ut qui temporibus quidem ex.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 451,
      UserId: 5,
      description: "Maiores autem accusantium adipisci et ea voluptas.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 461,
      UserId: 5,
      description:
        "Eos officiis quis maiores. Aut fuga rem dolorum veritatis. Quasi voluptatibus praesentium dolorem labore. Et velit cum et cupiditate. Voluptates et magnam. Ab perspiciatis voluptas ducimus nemo vel illo ratione molestiae ex.\n \rQui optio velit impedit fugit illo nam qui dolorem quasi. Qui perferendis ipsa nam aut quam in. Nihil accusantium dolore nulla sit rerum eum blanditiis reprehenderit asperiores. Doloribus est quae earum nostrum. Labore cupiditate quo laudantium aliquam. Ut libero reprehenderit et.\n \rVoluptatem enim omnis sit assumenda dolores id consequuntur vitae minus. Enim sit et consequatur. Ut dolore itaque harum blanditiis officiis assumenda labore libero aperiam. Autem delectus qui quia est et minus id dolor.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 471,
      UserId: 5,
      description:
        "Ea quae qui dolore velit provident explicabo doloremque voluptatem.\nEa nulla repellendus id quos.\nNihil dolor quis harum quod veniam.\nAccusantium et at at voluptatem et laboriosam sit voluptatem.\nAutem ex velit laudantium repellat.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 481,
      UserId: 5,
      description: "Doloribus voluptatibus consectetur eaque.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    },
    {
      id: 491,
      UserId: 5,
      description:
        "Et sit odio aut atque nam alias cumque.\nAccusamus dolorum illo qui.\nSed sapiente et sapiente.",
      createdAt: "2020-12-15T13:49:39.000Z",
      updatedAt: "2020-12-15T13:49:39.000Z",
      User: {
        id: 5,
        account: "user5",
        name: "user5",
        email: "user5@example.com",
        password:
          "$2a$10$r0OuIH7DT5GQKVp2ZHMczeM06VxsAruBf1fD3KxOmzHxkrYtHmCdu",
        role: "user",
        avatar: "https://loremflickr.com/320/240/men,women",
        introduction: "Quis aut non mollitia natus quasi ut quia.",
        cover: "http://placeimg.com/640/480/cats",
        createdAt: "2020-12-15T13:49:40.000Z",
        updatedAt: "2020-12-15T13:49:40.000Z"
      }
    }
  ]
};

export default {
  components: {
    NavBar,
    MainTweets,
    FollowRecommend
  },
  data() {
    return {
      tweets: {}
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      const tweets = dummyData;
      this.tweets = tweets;
    }
  }
};
</script>

