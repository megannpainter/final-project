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

//echo $twitter->setGetfield($getfield)
//             ->buildOauth($url, $requestMethod)
//             ->performRequest();

             
$tweetData = json_decode($twitter->setGetfield($getfield)
            ->buildOauth($url, $requestMethod)
            ->performRequest(), $assoc = TRUE);
             
$tweetMedia = array();

  foreach($tweetData['statuses'] as $items)
        {
            
            
            echo "<div class='twitter-tweet'>Tweet: " . $items['text'] . "'</div>'";
            echo "When: " . $items['created_at'] . "</br>";
            //echo "Tweet: " . $items['text'] . "</br>";
            //echo "When: " . $items['created_at'] . "</br>";
            //echo "Location:" . $items["location"] . "</br>";
            
            $entitiesArray = $items['entities'];
            if (isset($entitiesArray['media'])) {
                
                $mediaArray = $entitiesArray['media'];
                $tweetMedia = $mediaArray [0];
                echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img target='_blank' src='" . $tweetMedia['media_url'] . "'></a>";
            }   
            
        }
    
    

