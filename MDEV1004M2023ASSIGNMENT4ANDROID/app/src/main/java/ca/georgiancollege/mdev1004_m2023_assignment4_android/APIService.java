// File Name: APIService.java
// Student Name: Rajat Rajat
// Student ID: 200519561
// Date: 17th August 2023
package ca.georgiancollege.mdev1004_m2023_assignment4_android;

import ca.georgiancollege.mdev1004_m2023_assignment4_android.models.BasicResponse;
import ca.georgiancollege.mdev1004_m2023_assignment4_android.models.LoginRequest;
import ca.georgiancollege.mdev1004_m2023_assignment4_android.models.LoginResponse;
import ca.georgiancollege.mdev1004_m2023_assignment4_android.models.RegisterRequest;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface APIService
{

    @POST("/api/login")
    Call<LoginResponse> loginUser(@Body LoginRequest loginRequest);


    @POST("/api/register")
    Call<BasicResponse> registerUser(@Body RegisterRequest user);

}
