package com.ssonobackend.diarybackend.domain.dto;

import com.ssonobackend.diarybackend.domain.Journal;
import lombok.Getter;
import lombok.Data;


@Data
public class PostsResponseDto {

    private String date;
    private String content;
    private String emotion;

    public PostsResponseDto(Journal entity) {
        this.date = entity.getDate();
        this.content = entity.getContents();
        this.emotion = entity.getEmotion();
    }
}
