<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AvatarCreator extends Controller
{
    public function CreateImage(Request $request)
    {
        //parsing data from request
        $name = $request->fullName;
        $shape = $request->shape;
        $size = $request->size;

        $cache_data = $name . $shape;

        if ($cache_data == null) {
            return view('help');

        } else {
            //separating the name and surname entered by the user
            $shorted_name = explode(" ", $name);


            //checking if the created image is in the cache
            //or saving the cache after creating it
            if (Cache::has($cache_data)) {
                return view('index', array('data' => Cache::get($cache_data)));
            } else {

                //getting the first character of the first word and the first character of the last word
                $new_name = substr($shorted_name[0], 0, 1) . substr(end($shorted_name), 0, 1);

                //defining constants for good scaling
                $constant_font = 0.42;
                $constant_x = 0.16;
                $constant_y = 0.71;

                //defining attributes for image and random background color
                $font_size = $size * $constant_font;
                $image_size = $size;
                $image = @imagecreate($image_size, $image_size);
                $a = rand(0, 256);
                $b = rand(0, 256);
                $c = rand(0, 256);

                $background_color = imagecolorallocate($image, $a, $b, $c);

                //generating contrast color for text
                $text_color = imagecolorallocate($image, 255 - $a, 255 - $b, 255 - $c);

                $font_path = "../public/fonts/poppins.ttf";

                imagettftext($image, $font_size, 0, $size * $constant_x, $size * $constant_y, $text_color, $font_path, $new_name);

                //creating transparent area
                $transparent = imagecolorallocatealpha($image, 0, 0, 0, 127);

                //creating two if statements here because creating round shape is addition to square shape
                if ($shape == "square" || $shape == "round") {
                    if ($shape == "round") {
                        $r = $size / 2;
                        for ($x = 0; $x < $size; $x++)
                            for ($y = 0; $y < $size; $y++) {
                                $c = imagecolorat($image, $x, $y);
                                $_x = $x - $size / 2;
                                $_y = $y - $size / 2;
                                if ((($_x * $_x) + ($_y * $_y)) < ($r * $r)) {
                                    imagesetpixel($image, $x, $y, $c);
                                } else {
                                    imagesetpixel($image, $x, $y, $transparent);
                                }
                            }
                    }

                    ob_start();
                    imagepng($image);
                    imagedestroy($image);
                    $image_string = base64_encode(ob_get_clean());

                    //Storing image with given sized and also storing colors data to if the
                    //user wants to create hd image with different sizes of same image
                    Cache::put($cache_data, $image_string, 9999999);
                    //generating datas for caching
                    return view('index', array('data' => $image_string));
                } //it redirect help page if the shape not matches to two of them
                else {
                    return view('help');
                }

            }
        }
    }


}
