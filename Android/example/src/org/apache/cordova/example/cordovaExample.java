/*
       Licensed to the Apache Software Foundation (ASF) under one
       or more contributor license agreements.  See the NOTICE file
       distributed with this work for additional information
       regarding copyright ownership.  The ASF licenses this file
       to you under the Apache License, Version 2.0 (the
       "License"); you may not use this file except in compliance
       with the License.  You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

       Unless required by applicable law or agreed to in writing,
       software distributed under the License is distributed on an
       "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
       KIND, either express or implied.  See the License for the
       specific language governing permissions and limitations
       under the License.
 */

package org.apache.cordova.example;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.Window;

import org.apache.cordova.*;

public class cordovaExample extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        super.setBooleanProperty("keepRunning", true);
        super.setIntegerProperty("splashscreen",R.drawable.splash);
        super.loadUrl("file:///android_asset/www/index.html", 5000);
    }
    @Override
    public void onBackPressed() {
    	 AlertDialog.Builder builder = new AlertDialog.Builder(this);
    	    builder.setTitle("Exit");
    	    builder.setMessage("Would you like to exit Coyote Radio?");

    	    builder.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
    	            public void onClick(DialogInterface dialog, int which) {
    	                    dialog.dismiss();
    	                    finish();
    	            }
    	        });

    	    builder.setNegativeButton("No", new DialogInterface.OnClickListener() {
    	        @Override
    	        public void onClick(DialogInterface dialog, int which) {
    	            dialog.dismiss();
    	        }
    	    });
    	    AlertDialog alert = builder.create();
    	    alert.show();
    	}
    }

