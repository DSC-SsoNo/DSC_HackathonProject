package com.ssonobackend.diarybackend.domain.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor

public class PostsUpdateRequestDto {
    private String content;
    private String emotion;
    private String date;

    @Builder
    public PostsUpdateRequestDto(String content, String emotion, String date) {
        this.content = content;
        this.emotion= emotion;
        this.date = date;
    }
}