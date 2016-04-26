<html>
    <head>
        <!----------------VIEWPORT------------------->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    
    <!----------------BOOTSTRAP ISH------------------->
    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css">
    
        <!----------------PERSONAL STYLES------------------->
    <link href="../css/style.css" type="text/css" rel="stylesheet">
    
    <!----------------GOOGLE FONTS------------------->
    <link href='https://fonts.googleapis.com/css?family=Oxygen:400,300,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css'>
    
    </head>
    <body>
        
     <?php
        ini_set('display_errors', 1);
        require_once('TwitterAPIExchange.php');
           
        /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
        $settings = array(
            'oauth_access_token' => "541063266-fNhMbDSIRmn7QGcfYIbfeV9BvsvLuz6AoVWQMJC6",
            'oauth_access_token_secret' => "rR7Dam0ZydmyMr9S2gmk3m8LV5WlVBmQPElWKX20o61AX",
            'consumer_key' => "Ye36KoIwo8RAgA08ZcB7dxx9r",
            'consumer_secret' => "isBRqt7KyKkMABlo6nFuSNSzcXOJyKQJsaVE19Okr0OOawi8vX"
        );
        
        /** Perform a POST request and echo the response **/                     
        /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
        $url = 'https://api.twitter.com/1.1/blocks/create.json';
        $requestMethod = 'POST';
        
        /** POST fields required by the URL above. See relevant docs as above **/
        //$postfields = array(
        //    'screen_name' => 'usernameToBlock', 
        //    'skip_status' => '1'
        //    );
        //$twitter = new TwitterAPIExchange($settings);
        //echo $twitter->buildOauth($url, $requestMethod)
        //             ->setPostfields($postfields)
        //             ->performRequest();
        
        /** Perform a GET request and echo the response **/
        /** Note: Set the GET field BEFORE calling buildOauth(); **/
        $url = 'https://api.twitter.com/1.1/search/tweets.json';
        $getfield = '?q=%23grandcanyon';
        $requestMethod = 'GET';
        $twitter = new TwitterAPIExchange($settings);
        
                     
        $tweetData = json_decode($twitter->setGetfield($getfield)
                    ->buildOauth($url, $requestMethod)
                    ->performRequest(), $assoc = TRUE);
                     
        $tweetMedia = array();
        
          foreach($tweetData['statuses'] as $items)
                {
                    
                    echo "<div class='row twitter-info'>";
                    echo "<div class='col-xs-2'><a href='http://twitter.com/" . $items['user']['screen_name'] . "' target='_blank'><img class='twitter-profilepictures' src='" . $items['user']['profile_image_url'] . "'/></a></div>";
                    echo "<div class='col-xs-10 tweet-info'><span class='twitter-name'>" . $items['user']['name'] . " </span>";
                    echo "<span class='twitter-username'>@" . $items['user']['screen_name'];
                    echo "</span><p class='tweet'>" . $items['text'] . "</p></div></div>";
                    
                    $entitiesArray = $items['entities'];
                    if (isset($entitiesArray['media'])) {
                        
                        $mediaArray = $entitiesArray['media'];
                        $tweetMedia = $mediaArray [0];
                        echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img class='twitter-pic' target='_blank' src='" . $tweetMedia['media_url'] . "'></a>";
                    }   
                    
                }
    ?>
        
    </body>
</html>

<!--Help via:https://github.com/brmayes/j586/blob/master/project%20folders/project-four/twitter/index.php-->
