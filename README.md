# Phase-1-Project
My Flatiron Phase 1 Project

README
Ruben's Phase 1 Project, a website for video games for ps5, ps4, xbox series x, xbox one, wii u, and pc. Navigate through the page and see which game you'd like to choose.

Video Demo
 The video requires my email approval for access; it was the only way I can turn the recording into a link, my apologies. 
https://drive.google.com/file/d/1EGLt-RBGmcVoWXKYMhGMylgijPwTJsn_/view

Badge
docker pull shieldsio/shields





VISUALS
#include "string_builder.h"

typedef struct {
  bool fullscreen;
  int skip_limit;
  int skip_threshold;
  const char *terminal_app;
  const char *window_id;
  const char *img_ext;
  const char *img_dir;
  const char *out_file;
    bool fullscreen;
    int skip_limit;
    int skip_threshold;
    const char *terminal_app;
    const char *window_id;
    const char *img_ext;
    const char *img_dir;
    const char *out_file;
} Options;

typedef int    (*ReadFunc)    (FILE *fp, Header *h, char **buf);
@@ -80,7 +80,7 @@ ttydelay (struct timeval prev, struct timeval cur)
{
    struct timeval diff = timeval_diff(prev, cur);
    if (diff.tv_sec < 0) {
      diff.tv_sec = diff.tv_usec = 0;
        diff.tv_sec = diff.tv_usec = 0;
    }
    return (diff.tv_sec * 1000) + (diff.tv_usec / 1000);
}
@@ -96,7 +96,7 @@ ttyread (FILE *fp, Header *h, char **buf)
    if (*buf == NULL) {
        perror("Error: Out of memory (malloc)");
    }
  

    if (fread(*buf, 1, h->len, fp) == 0) {
        perror("Error: Failed to read (fread)");
    }
@@ -118,59 +118,59 @@ clear_screen (void) {
int
take_snapshot_darwin(const char *img_path, Options o)
}
  static char cmd [256];

  if (sprintf(cmd, 
        "screencapture -l$(osascript -e 'tell app \"%s\" to id of window 1') -o -m %s &> /dev/null",
        o.terminal_app, img_path) < 0) {
      return -1;
  }

  if (system(cmd) != 0) {
      return -1;
  }

  if (!o.fullscreen) {
    if (sprintf(cmd, 
          "convert %s -background white -quiet -flatten +matte -crop +0+22 -crop +4+0 -crop -4-0 +repage %s &> /dev/null",
          img_path, img_path) < 0) {
    static char cmd [256];

    if (sprintf(cmd,
            "screencapture -l$(osascript -e 'tell app \"%s\" to id of window 1') -o -m %s &> /dev/null",
            o.terminal_app, img_path) < 0) {
        return -1;
    }

    if (system(cmd) != 0) {
        return -1;
    }
  }

  if (system(cmd) != 0) {
      return -1;
  }
    if (!o.fullscreen) {
        if (sprintf(cmd,
                "convert %s -background white -quiet -flatten +matte -crop +0+22 -crop +4+0 -crop -4-0 +repage %s &> /dev/null",
                img_path, img_path) < 0) {
            return -1;
        }
    }

    if (system(cmd) != 0) {
        return -1;
    }

  return 0;
    return 0;
}

int
take_snapshot_linux(const char *img_path, Options o)
{
  static char cmd [256];
    static char cmd [256];

  // ensure text has been written before taking screenshot
  usleep(50000);
    // ensure text has been written before taking screenshot
    usleep(50000);

  if (sprintf(cmd, "xwd -id %s -out %s", o.window_id, img_path) < 0) {
      return -1;
  }
    if (sprintf(cmd, "xwd -id %s -out %s", o.window_id, img_path) < 0) {
        return -1;
    }

  if (system(cmd) != 0) {
      return -1;
  }
    if (system(cmd) != 0) {
        return -1;
    }

  return 0;
    return 0;
}

int
take_snapshot(const char *img_path, Options o)
{
#ifdef OS_DARWIN
  return take_snapshot_darwin(img_path, o);
    return take_snapshot_darwin(img_path, o);
#else 
  return take_snapshot_linux(img_path, o);
    return take_snapshot_linux(img_path, o);
#endif
}

@@ -210,24 +210,24 @@ ttyplay (FILE *fp, ReadFunc read_func, WriteFunc write_func, Options o)
        }

        if (delay <= o.skip_threshold) {
          skip = true;
          nskipped++;
            skip = true;
            nskipped++;
        } else {
          skip = false;
          nskipped = 0;
            skip = false;
            nskipped = 0;
        }

        if (skip && nskipped > o.skip_limit) {
          nskipped = 0;
          skip = false;
            nskipped = 0;
            skip = false;
        }

        if (!skip && index != 0) {
          if (sprintf(arg_buffer, " -delay %f %s", delay * 0.1, img_path) < 0) {
              perror("Error: Failed to format 'convert' parameters");
              break;
          }
          StringBuilder_write(sb, arg_buffer);
            if (sprintf(arg_buffer, " -delay %f %s", delay * 0.1, img_path) < 0) {
                perror("Error: Failed to format 'convert' parameters");
                break;
            }
            StringBuilder_write(sb, arg_buffer);
        }
        if (sprintf(img_path, "%s/%d.%s", o.img_dir, index, o.img_ext) < 0) {
            perror("Error: Failed to format filename");
@@ -248,7 +248,7 @@ ttyplay (FILE *fp, ReadFunc read_func, WriteFunc write_func, Options o)

    printf("Creating Animated GIF ... this can take a while\n");
    if (system(sb->s) != 0) {
      perror("Error: Failed to execute 'convert' command");
        perror("Error: Failed to execute 'convert' command");
    }
    printf("Created: %s in the current directory!\n", o.out_file);

@@ -291,15 +291,15 @@ main (int argc, char **argv)
    char dir_template[] = "/tmp/ttygif.XXXXXX";
    options.img_dir = mkdtemp(dir_template);
    if (options.img_dir == NULL) {
      perror("Error: Failed to create tmp directory.");
      exit(EXIT_FAILURE);
        perror("Error: Failed to create tmp directory.");
        exit(EXIT_FAILURE);
    }

#ifdef OS_DARWIN
    options.img_ext = "png";
    if (options.terminal_app == NULL || !strlen(options.terminal_app)) {
      perror("Error: TERM_PROGRAM environment variable was empty.");
      exit(EXIT_FAILURE);
        perror("Error: TERM_PROGRAM environment variable was empty.");
        exit(EXIT_FAILURE);
    }
#else
    options.img_ext = "xwd";
@@ -310,13 +310,13 @@ main (int argc, char **argv)
#endif

    if (argc < 2) {
      usage();
        usage();
    }

    if (argc >= 3) {
      if (strstr(argv[2], "-f")) {
        options.fullscreen = true;
      }
        if (strstr(argv[2], "-f")) {
            options.fullscreen = true;
        }
    }

    set_progname(argv[0]);







Copyright (c) [2023] [Ruben Jean-Pierre]

Phase 1 Project still in the making.
