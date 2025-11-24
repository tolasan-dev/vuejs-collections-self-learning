const app = Vue.createApp({
  data() {
    return {
                            items: [
                        {
                            "id": 1605,
                            "title": "AI Startup Reaches $5M Valuation Within First Year",
                            "thumbnail": "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                            "category": { "id": 903, "name": "Innovation" },
                            "creator": {
                                "id": 683,
                                "firstName": "Morgan",
                                "lastName": "Lee",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot1"
                            }
                        },
                        {
                            "id": 1606,
                            "title": "How Teen Programmers Are Changing the Tech Landscape",
                            "thumbnail": "https://images.unsplash.com/photo-1522199710521-72d69614c702",
                            "category": { "id": 904, "name": "Technology" },
                            "creator": {
                                "id": 684,
                                "firstName": "Taylor",
                                "lastName": "Gray",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot2"
                            }
                        },
                        {
                            "id": 1607,
                            "title": "Smart Apps Built by Students Gain Global Popularity",
                            "thumbnail": "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
                            "category": { "id": 905, "name": "Startups" },
                            "creator": {
                                "id": 685,
                                "firstName": "Avery",
                                "lastName": "Miller",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot3"
                            }
                        },
                        {
                            "id": 1608,
                            "title": "Developers Share Their Secrets for Rapid Prototyping",
                            "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
                            "category": { "id": 906, "name": "Development" },
                            "creator": {
                                "id": 686,
                                "firstName": "Casey",
                                "lastName": "Brooks",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot4"
                            }
                        },
                        {
                            "id": 1609,
                            "title": "Top 5 Tech Trends Rising in 2025",
                            "thumbnail": "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
                            "category": { "id": 907, "name": "Trends" },
                            "creator": {
                                "id": 687,
                                "firstName": "Reese",
                                "lastName": "Campbell",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot5"
                            }
                        },
                        {
                            "id": 1610,
                            
                            "title": "Young Entrepreneurs Launch AI-Based Learning Tools",
                            "thumbnail": "https://images.unsplash.com/photo-1551434678-e076c223a692",
                            "category": { "id": 908, "name": "Education" },
                            "creator": {
                                "id": 688,
                                "firstName": "Jordan",
                                "lastName": "Reed",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot6"
                            }
                        },
                        {
                            "id": 1611,
                            "title": "Why More Students Are Building Mobile Apps Early",
                            "thumbnail": "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec",
                            "category": { "id": 909, "name": "Mobile" },
                            "creator": {
                                "id": 689,
                                "firstName": "Riley",
                                "lastName": "Carter",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot7"
                            }
                        },
                        {
                            "id": 1612,
                            "title": "New AI Tools Make Development Faster Than Ever",
                            "thumbnail": "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
                            "category": { "id": 910, "name": "AI" },
                            "creator": {
                                "id": 690,
                                "firstName": "Sawyer",
                                "lastName": "Morgan",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot8"
                            }
                        },
                        {
                            "id": 1613,
                            "title": "Inside the Growth of Student-Led Tech Companies",
                            "thumbnail": "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
                            "category": { "id": 911, "name": "Business" },
                            "creator": {
                                "id": 691,
                                "firstName": "Charlie",
                                "lastName": "Adams",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot9"
                            }
                        },
                        {
                            "id": 1614,
                            "title": "Developers Reveal Their Favorite Tools of the Year",
                            "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475",
                            "category": { "id": 912, "name": "Tools" },
                            "creator": {
                                "id": 692,
                                "firstName": "Hayden",
                                "lastName": "Perry",
                                "avatar": "https://api.dicebear.com/7.x/bottts/svg?seed=bot10"
                            }
                        }
                    ]


    };
  },
});

app.mount("#app");
