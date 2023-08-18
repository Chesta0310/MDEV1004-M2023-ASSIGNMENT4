// File Name: MovieAdapter.java
// Student Name: Rajat Rajat
// Student ID: 200519561
// Date: 17th August 2023
package ca.georgiancollege.mdev1004_m2023_assignment4_android;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.List;

import ca.georgiancollege.mdev1004_m2023_assignment4_android.models.Movie;

public class MovieAdapter extends RecyclerView.Adapter<MovieAdapter.MovieViewHolder>
{
    private List<Movie> movies;
    private final Context context;

    public MovieAdapter(List<Movie> movies, Context context)
    {
        this.movies = movies;
        this.context = context;
    }

    @NonNull
    @Override
    public MovieViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType)
    {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movie_item, parent, false);
        return new MovieViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MovieViewHolder holder, int position)
    {
        if (movies == null)
        {
            return;
        }

        Movie movie = movies.get(position);

        holder.nameTextView.setText(movie.getTitle());
        holder.studioTextView.setText(movie.getStudio());
        holder.criticsRatingTextView.setText(String.valueOf(movie.getCriticsRating()));
        Log.d("AAAAA", "posterLink: "+movie.getPosterLink());

        if (movie.getPosterLink() != null && !movie.getPosterLink().isEmpty())
        {
            Glide
                    .with(context)
                    .load(movie.getPosterLink())
                    .fitCenter()
                    .into(holder.posterImageView);
        }
    }


    @Override
    public int getItemCount()
    {
        return movies.size();
    }

    public void setMovies(List<Movie> movies)
    {
        this.movies = movies;
        this.notifyDataSetChanged();
    }

    static class MovieViewHolder extends RecyclerView.ViewHolder
    {
        TextView nameTextView;
        TextView studioTextView;
        TextView criticsRatingTextView;
        ImageView posterImageView;

        public MovieViewHolder(@NonNull View itemView)
        {
            super(itemView);
            nameTextView = itemView.findViewById(R.id.nameTextView);
            studioTextView = itemView.findViewById(R.id.studioTextView);
            criticsRatingTextView = itemView.findViewById(R.id.criticsRatingTextView);
            posterImageView = itemView.findViewById(R.id.posterImageView);
        }
    }
}
